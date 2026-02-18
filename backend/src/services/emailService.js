const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Builds the HTML email body with a styled materials table.
 */
function buildEmailHtml(customerName, materials, selectionSheetNumber, fabricatorName, helpedBy, dateStr) {
  const rows = (materials || []).map(m => {
    const size = m.size ? `${m.size.l || '?'} × ${m.size.h || '?'}` : '';
    const hold = m.hold ? `Yes${m.slabNumbers ? ` (${m.slabNumbers})` : ''}` : 'No';
    return `
      <tr>
        <td>${escHtml(m.name || '')}</td>
        <td>${escHtml(m.soldAs || '')}</td>
        <td>${escHtml(m.finish || '')}</td>
        <td>${escHtml(size)}</td>
        <td>${escHtml(m.lot || '')}</td>
        <td>${escHtml(m.location || '')}</td>
        <td style="text-align:center">${m.quantity ?? 1}</td>
        <td style="text-align:center">${escHtml(hold)}</td>
      </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Material Selection – Reliance Surfaces</title>
</head>
<body style="margin:0;padding:0;background:#111;color:#eee;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:8px;overflow:hidden;">

        <!-- Header -->
        <tr style="background:#1a1a1a;">
          <td style="padding:32px 32px 0;border-bottom:2px solid #ccb331;">
            <h1 style="margin:0 0 4px;font-size:22px;color:#ccb331;letter-spacing:1px;">RELIANCE SURFACES</h1>
            <h2 style="margin:0 0 16px;font-size:16px;color:#fff;font-weight:normal;">Your Material Selection is Ready</h2>
          </td>
        </tr>

        <!-- Greeting -->
        <tr><td style="padding:24px 32px 0;">
          <p style="margin:0 0 8px;font-size:15px;">Hi <strong>${escHtml(customerName)}</strong>,</p>
          <p style="margin:0 0 16px;font-size:14px;color:#ccc;">
            Thank you for visiting Reliance Surfaces. Below is a summary of the materials selected during your visit.
            Your selection sheet is attached as a PDF for your records.
          </p>
        </td></tr>

        <!-- Sheet info -->
        <tr><td style="padding:0 32px 16px;">
          <table cellpadding="0" cellspacing="0" style="background:#222;border-radius:6px;padding:12px 16px;width:100%;">
            <tr>
              <td style="font-size:13px;color:#999;">Sheet #</td>
              <td style="font-size:13px;font-weight:bold;color:#ccb331;">${escHtml(selectionSheetNumber || 'N/A')}</td>
              <td style="font-size:13px;color:#999;padding-left:24px;">Date</td>
              <td style="font-size:13px;color:#ccc;">${escHtml(dateStr)}</td>
            </tr>
            <tr>
              <td style="font-size:13px;color:#999;padding-top:6px;">Fabricator</td>
              <td style="font-size:13px;color:#ccc;" colspan="3">${escHtml(fabricatorName || 'N/A')}</td>
            </tr>
            <tr>
              <td style="font-size:13px;color:#999;padding-top:6px;">Helped By</td>
              <td style="font-size:13px;color:#ccc;" colspan="3">${escHtml(helpedBy || 'N/A')}</td>
            </tr>
          </table>
        </td></tr>

        <!-- Materials table -->
        <tr><td style="padding:0 32px 24px;">
          <h3 style="margin:0 0 12px;font-size:13px;color:#ccb331;text-transform:uppercase;letter-spacing:1px;">Materials Selected</h3>
          <div style="overflow-x:auto;">
            <table cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:12px;">
              <thead>
                <tr style="background:#2a2a2a;">
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Name</th>
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Sold As</th>
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Finish</th>
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Size</th>
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Lot</th>
                  <th style="text-align:left;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Location</th>
                  <th style="text-align:center;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Qty</th>
                  <th style="text-align:center;color:#ccb331;padding:8px 6px;border-bottom:1px solid #444;">Hold</th>
                </tr>
              </thead>
              <tbody style="color:#ddd;">
                ${rows || '<tr><td colspan="8" style="color:#888;padding:12px;">No materials listed.</td></tr>'}
              </tbody>
            </table>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr style="background:#111;">
          <td style="padding:20px 32px;border-top:1px solid #333;">
            <p style="margin:0;font-size:12px;color:#666;">
              Reliance Granite and Marble Corporation · 50 Boright Avenue, Kenilworth, NJ 07033<br>
              This email was sent because you completed a check-in at our facility.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Sends the selection sheet email to the customer.
 * @param {Object} options
 * @param {string[]} options.toEmails       - Customer email addresses
 * @param {string}   options.customerName   - Full name
 * @param {Array}    options.materials      - Materials list
 * @param {string}   options.selectionSheetNumber
 * @param {string}   options.fabricatorName - Fabricator company name
 * @param {string}   options.helpedBy       - Staff member name
 * @param {Uint8Array} options.pdfBytes     - Selection PDF bytes
 * @param {string}   options.checkInTime    - ISO timestamp
 */
async function sendSelectionEmail(options) {
  const {
    toEmails,
    customerName,
    materials,
    selectionSheetNumber,
    fabricatorName,
    helpedBy,
    pdfBytes,
    checkInTime,
  } = options;

  if (!toEmails || toEmails.length === 0) {
    throw new Error('No recipient emails provided');
  }

  const dateStr = new Date(checkInTime || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const html = buildEmailHtml(customerName, materials, selectionSheetNumber, fabricatorName, helpedBy, dateStr);

  const emailPayload = {
    from: process.env.EMAIL_FROM || 'Reliance Surfaces <onboarding@resend.dev>',
    to: toEmails,
    subject: `Your Material Selection – Sheet #${selectionSheetNumber || 'N/A'} | Reliance Surfaces`,
    html,
  };

  // Attach PDF only if bytes are available
  if (pdfBytes) {
    const pdfBase64 = Buffer.from(pdfBytes).toString('base64');
    emailPayload.attachments = [
      {
        filename: `Selection_Sheet_${selectionSheetNumber || 'NA'}.pdf`,
        content: pdfBase64,
      },
    ];
  }

  console.log(`[EmailService] Attempting send to: ${JSON.stringify(toEmails)}`);
  console.log(`[EmailService] From: ${emailPayload.from}`);
  console.log(`[EmailService] Subject: ${emailPayload.subject}`);
  console.log(`[EmailService] Has PDF attachment: ${!!emailPayload.attachments}`);

  const { data, error } = await resend.emails.send(emailPayload);

  if (error) {
    console.error('[EmailService] Resend API error:', JSON.stringify(error));
    throw new Error(`Resend API error: ${error.message || JSON.stringify(error)}`);
  }

  console.log('[EmailService] Resend accepted email. ID:', data?.id);
  console.log('[EmailService] Full response:', JSON.stringify(data));
  return data;
}

module.exports = { sendSelectionEmail };
