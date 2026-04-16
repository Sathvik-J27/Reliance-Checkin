const express = require('express');
const locationGuard = require('../middleware/locationGuard');
const { validateCheckIn } = require('../validators/checkInValidator');
const { insertCheckIn, updateWaiverPdfUrl, completeCheckIn, claimCheckIn, saveDraft, getAllCheckIns, markAsDone } = require('../services/checkInService');
const { generateWaiverPDF } = require('../services/pdfService');
const { buildFilePath, uploadPdf } = require('../services/storageService');
const { generateSelectionPDF } = require('../services/selectionPdfService');
const { sendSelectionEmail } = require('../services/emailService');

const router = express.Router();

// ── Server-Sent Events (SSE) — real-time push to all open staff dashboards ────
// Replaces per-client polling; every mutation calls broadcastAll() so all screens
// update within milliseconds instead of up to 3 s.
const sseClients = new Set();

async function broadcastAll() {
  if (sseClients.size === 0) return;
  try {
    const checkIns = await getAllCheckIns();
    const payload = `data: ${JSON.stringify({ type: 'update', data: checkIns })}\n\n`;
    for (const client of sseClients) {
      try {
        client.write(payload);
      } catch {
        sseClients.delete(client);
      }
    }
  } catch (err) {
    console.error('[SSE] broadcastAll failed:', err.message);
  }
}

/**
 * GET /api/check-ins/events
 * SSE stream — staff dashboards subscribe here instead of polling.
 * The browser's EventSource API auto-reconnects on disconnect.
 */
router.get('/check-ins/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Send an immediate ping so the client knows it's connected
  res.write('data: {"type":"connected"}\n\n');

  sseClients.add(res);

  // Remove client when they disconnect (tab closed, navigation, etc.)
  req.on('close', () => sseClients.delete(res));
});

/**
 * Helper function to extract client IP address from request.
 * Handles X-Forwarded-For header (proxies/load balancers) and direct connections.
 */
function getClientIp(req) {
  // Check X-Forwarded-For header first (used by proxies like Railway, Heroku, etc.)
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    // X-Forwarded-For can contain multiple IPs: "client, proxy1, proxy2"
    // The first one is the original client IP
    return forwarded.split(',')[0].trim();
  }

  // Fallback to direct socket connection
  // req.socket.remoteAddress or req.connection.remoteAddress
  return req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown';
}

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
router.post('/check-ins', locationGuard, async (req, res, next) => {
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

    // ── Step 1b: Capture IP address and augment data ─────────────────────────
    const ipAddress = getClientIp(req);
    const augmentedData = {
      ...data,
      ipAddress,
      // sessionId and deviceInfo come from frontend via req.body (already in data)
    };

    // ── Step 2: Persist check-in (ACID atomic insert) ─────────────────────────
    const record = await insertCheckIn(augmentedData);
    const checkInId = record.id;

    // Attach the DB-generated ID to data so the PDF footer can show it
    const checkInDataWithId = { ...augmentedData, id: checkInId };

    // ── Steps 3-5: PDF generation + upload (best-effort) ─────────────────────
    let waiverPdfUrl = null;
    let pdfError = null;

    try {
      const pdfBytes  = await generateWaiverPDF(checkInDataWithId);
      const filePath  = buildFilePath(augmentedData.firstName, augmentedData.lastName, augmentedData.checkInTime);
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
        firstName:    augmentedData.firstName,
        lastName:     augmentedData.lastName,
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

    // Push update to all open staff dashboards (fire-and-forget)
    broadcastAll().catch(() => {});

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

    // ── Step 2: Atomic DB update (idempotent — throws 409 if already helped) ─
    let record;
    try {
      record = await completeCheckIn(id, {
        helpedBy,
        selectionSheetNumber,
        materials: materials || [],
        fabricator: selectedFabricator || null,
      });
    } catch (err) {
      if (err.status === 409) {
        return res.status(409).json({ success: false, error: err.message });
      }
      throw err;
    }

    // ── Steps 3-4: PDF + email (best-effort, decoupled) ───────────────────
    const customerName = [record.first_name, record.last_name].filter(Boolean).join(' ');
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

    // Push update to all open staff dashboards (fire-and-forget)
    broadcastAll().catch(() => {});

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

    // Push update to all open staff dashboards (fire-and-forget)
    broadcastAll().catch(() => {});

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

    // Push update to all open staff dashboards (fire-and-forget)
    broadcastAll().catch(() => {});

    return res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/check-ins/:id/claim
 * Atomically claim a waiting check-in for a staff member.
 * Uses a conditional DB update (.is('currently_helped_by', null)) so only the
 * first request wins — prevents two staff members from attending the same customer.
 * Returns { claimed: true } on success or { claimed: false, claimedBy } if taken.
 */
router.post('/check-ins/:id/claim', async (req, res, next) => {
  try {
    const { id } = req.params;

    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!UUID_RE.test(id)) {
      return res.status(400).json({ success: false, error: 'Invalid check-in ID format' });
    }

    const { helpedBy } = req.body;
    if (!helpedBy) {
      return res.status(400).json({ success: false, error: 'helpedBy is required' });
    }

    const record = await claimCheckIn(id, helpedBy);

    if (record) {
      // Claim succeeded — broadcast so other dashboards see the attending label immediately
      broadcastAll().catch(() => {});
      return res.status(200).json({ success: true, claimed: true });
    }

    // Claim failed — fetch who has it so the frontend can show a message
    const { data: existing } = await require('../config/supabase')
      .from('check_ins')
      .select('currently_helped_by')
      .eq('id', id)
      .single();

    return res.status(200).json({
      success: true,
      claimed: false,
      claimedBy: existing?.currently_helped_by || null,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
