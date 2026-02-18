const express = require('express');
const { validateCheckIn } = require('../validators/checkInValidator');
const { insertCheckIn, updateWaiverPdfUrl, completeCheckIn, saveDraft, getAllCheckIns, markAsDone } = require('../services/checkInService');
const { generateWaiverPDF } = require('../services/pdfService');
const { buildFilePath, uploadPdf } = require('../services/storageService');
const { generateSelectionPDF } = require('../services/selectionPdfService');
const { sendSelectionEmail } = require('../services/emailService');

const router = express.Router();

/**
 * POST /api/check-ins
 * CQRS Command: Create a new customer check-in.
 *
 * Flow (ACID-aware):
 *  1. Validate input → 400 on failure (no DB write)
 *  2. Insert check-in record → get UUID (atomic; rolled back automatically if insert fails)
 *  3. Generate PDF → upload → update DB with URL
 *     If steps 3-5 fail, the check-in is still saved with waiver_pdf_url = null.
 *     This keeps the check-in atomic while making PDF generation best-effort.
 */
router.post('/check-ins', async (req, res, next) => {
  try {
    // ── Step 1: Validate ──────────────────────────────────────────────────────
    const validation = validateCheckIn(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validation.errors,
      });
    }

    const data = validation.data;

    // ── Step 2: Persist check-in (ACID atomic insert) ─────────────────────────
    const record = await insertCheckIn(data);
    const checkInId = record.id;

    // Attach the DB-generated ID to data so the PDF footer can show it
    const checkInDataWithId = { ...data, id: checkInId };

    // ── Steps 3-5: PDF generation + upload (best-effort) ─────────────────────
    let waiverPdfUrl = null;
    let pdfError = null;

    try {
      const pdfBytes  = await generateWaiverPDF(checkInDataWithId);
      const filePath  = buildFilePath(data.firstName, data.lastName, data.checkInTime);
      waiverPdfUrl    = await uploadPdf(pdfBytes, filePath);
      await updateWaiverPdfUrl(checkInId, waiverPdfUrl);
    } catch (err) {
      pdfError = err.message;
      console.error(`[CheckIn ${checkInId}] PDF pipeline error:`, err.message);
      // Check-in is already saved — continue without PDF URL
    }

    // ── Step 6: Respond ───────────────────────────────────────────────────────
    const response = {
      success: true,
      data: {
        id:           checkInId,
        firstName:    data.firstName,
        lastName:     data.lastName,
        status:       'waiting',
        checkInTime:  record.check_in_time,
        waiverPdfUrl: waiverPdfUrl,
      },
      message: pdfError
        ? 'Check-in saved successfully. PDF generation encountered an issue.'
        : 'Check-in completed successfully',
    };

    if (pdfError) {
      response.pdfError = pdfError;
    }

    return res.status(201).json(response);

  } catch (err) {
    next(err); // passes to global errorHandler
  }
});

/**
 * POST /api/check-ins/:id/complete
 * CQRS Command: Mark a check-in as helped, generate selection PDF, send email to customer.
 *
 * ACID-aware flow:
 *  1. Validate → 400
 *  2. Atomic DB update: status → 'helped', helped_time = NOW()  (this is the commit point)
 *  3. PDF generation + email are best-effort: failures are logged but don't affect the response.
 */
router.post('/check-ins/:id/complete', async (req, res, next) => {
  try {
    const { id } = req.params;

    // Basic UUID format check
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!UUID_RE.test(id)) {
      return res.status(400).json({ success: false, error: 'Invalid check-in ID format' });
    }

    const { materials, selectedFabricator, helpedBy, selectionSheetNumber } = req.body;

    if (!helpedBy || !selectionSheetNumber) {
      return res.status(400).json({
        success: false,
        error: 'helpedBy and selectionSheetNumber are required',
      });
    }

    // ── Step 2: Atomic DB update ───────────────────────────────────────────
    const record = await completeCheckIn(id, {
      helpedBy,
      selectionSheetNumber,
      materials: materials || [],
      fabricator: selectedFabricator || null,
    });

    // ── Steps 3-4: PDF + email (best-effort, decoupled) ───────────────────
    const customerName = `${record.first_name} ${record.last_name}`;
    // Normalise emails: supabase returns JSONB as an array, but guard against strings
    const rawEmails = record.emails;
    const customerEmails = Array.isArray(rawEmails)
      ? rawEmails.map(e => String(e).trim()).filter(Boolean)
      : typeof rawEmails === 'string' ? [rawEmails.trim()].filter(Boolean) : [];
    console.log(`[Complete ${id}] Customer: ${customerName}, emails from DB: ${JSON.stringify(customerEmails)}`);

    let pdfBytes = null;
    let pdfError = null;
    let emailError = null;

    // Step 3a: generate PDF (best-effort; email still sends without it)
    try {
      pdfBytes = await generateSelectionPDF({
        checkInId: id,
        customerName,
        customerEmails,
        customerCheckInTime: record.check_in_time,
        fabricator: selectedFabricator,
        materials: materials || [],
        helpedBy,
        selectionSheetNumber,
      });
      console.log(`[Complete ${id}] Selection PDF generated successfully`);
    } catch (err) {
      pdfError = err.message;
      console.error(`[Complete ${id}] PDF generation failed:`, err.message);
    }

    // Step 3b: send email (always attempted if there are recipient emails)
    if (customerEmails.length > 0) {
      try {
        await sendSelectionEmail({
          toEmails: customerEmails,
          customerName,
          materials: materials || [],
          selectionSheetNumber,
          fabricatorName: selectedFabricator?.companyName || '',
          helpedBy,
          pdfBytes: pdfBytes || null,
          checkInTime: record.check_in_time,
        });
        console.log(`[Complete ${id}] Email sent to: ${customerEmails.join(', ')}`);
      } catch (err) {
        emailError = err.message;
        console.error(`[Complete ${id}] Email send failed:`, err.message);
      }
    } else {
      console.warn(`[Complete ${id}] No customer emails on record — email skipped`);
    }

    const issues = [pdfError && `PDF: ${pdfError}`, emailError && `Email: ${emailError}`].filter(Boolean);

    return res.status(200).json({
      success: true,
      data: { id, status: 'helped' },
      message: issues.length === 0
        ? 'Check-in completed and email sent to customer'
        : `Check-in completed. Issues: ${issues.join('; ')}`,
      ...(pdfError  && { pdfError }),
      ...(emailError && { emailError }),
    });

  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/check-ins
 * Returns all check-ins (waiting + helped) with full staff selection data.
 * Used by the frontend to re-hydrate state after a page refresh.
 */
router.get('/check-ins', async (req, res, next) => {
  try {
    const checkIns = await getAllCheckIns();
    return res.status(200).json({ success: true, data: checkIns });
  } catch (err) {
    next(err);
  }
});

/**
 * PATCH /api/check-ins/:id/done
 * CQRS Command: Mark a check-in as done (Staff2 queue management).
 * No selection data required — just updates status to 'done'.
 */
router.patch('/check-ins/:id/done', async (req, res, next) => {
  try {
    const { id } = req.params;

    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!UUID_RE.test(id)) {
      return res.status(400).json({ success: false, error: 'Invalid check-in ID format' });
    }

    await markAsDone(id);

    return res.status(200).json({ success: true, data: { id, status: 'done' } });
  } catch (err) {
    next(err);
  }
});

/**
 * PATCH /api/check-ins/:id/draft
 * Saves in-progress draft data for a waiting check-in.
 * Called when staff closes the popup without fully submitting (step 3).
 */
router.patch('/check-ins/:id/draft', async (req, res, next) => {
  try {
    const { id } = req.params;

    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!UUID_RE.test(id)) {
      return res.status(400).json({ success: false, error: 'Invalid check-in ID format' });
    }

    const { draftStep, materials, fabricator, helpedBy, selectionSheetNumber } = req.body;

    await saveDraft(id, { draftStep, materials, fabricator, helpedBy, selectionSheetNumber });

    return res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
