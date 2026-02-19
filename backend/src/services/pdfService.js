const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const { WAIVER_TITLE, WAIVER_PARAGRAPHS } = require('../../constants/waiverText');

const TEMPLATE_PATH = path.join(__dirname, '../../assets/waiver-template.png');
const LOGO_PATH     = path.join(__dirname, '../../assets/logo.png');

// PDF page dimensions (8.5" x 11" at 72 DPI)
const PAGE_WIDTH  = 612;
const PAGE_HEIGHT = 792;

// Layout constants
const MARGIN_LEFT   = 50;
const MARGIN_RIGHT  = 562;
const CONTENT_WIDTH = MARGIN_RIGHT - MARGIN_LEFT;
const MARGIN_TOP    = 742; // starting Y (pdf-lib origin is bottom-left)
const MARGIN_BOTTOM = 60;

// Typography
const FONT_SIZE_TITLE    = 16;
const FONT_SIZE_HEADER   = 11;
const FONT_SIZE_BODY     = 8.5;
const FONT_SIZE_SMALL    = 8;
const LINE_HEIGHT_BODY   = 12;
const LINE_HEIGHT_TITLE  = 22;
const LINE_HEIGHT_HEADER = 16;

const COLOR_BLACK = rgb(0.1, 0.1, 0.1);
const COLOR_DARK  = rgb(0.2, 0.2, 0.2);
const COLOR_GOLD  = rgb(0.68, 0.52, 0.14); // Reliance brand gold

/**
 * Loads the background template as bytes.
 */
function loadTemplateBytes() {
  return fs.readFileSync(TEMPLATE_PATH);
}

/**
 * Loads the logo image as bytes.
 */
function loadLogoBytes() {
  return fs.readFileSync(LOGO_PATH);
}

/**
 * Wraps text to fit within maxWidth using approximate char width.
 */
function wrapText(text, font, fontSize, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);

    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}

/**
 * Decodes a base64 PNG data URL to a Buffer, handling both
 * "data:image/png;base64,..." and raw base64 strings.
 */
function decodeSignatureToBuffer(signature) {
  const base64 = signature.startsWith('data:')
    ? signature.split(',')[1]
    : signature;
  return Buffer.from(base64, 'base64');
}

/**
 * Adds a new page with the background template embedded.
 */
async function addPageWithBackground(pdfDoc, templateBytes) {
  const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const templateImage = await pdfDoc.embedPng(templateBytes);
  page.drawImage(templateImage, { x: 0, y: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT });
  return page;
}

/**
 * State helper: checks if we need a new page and creates one.
 * Returns { page, y } (potentially updated).
 */
async function ensureSpace(state, neededHeight) {
  if (state.y - neededHeight < MARGIN_BOTTOM) {
    state.page = await addPageWithBackground(state.pdfDoc, state.templateBytes);
    state.y = MARGIN_TOP;
  }
}

/**
 * Draws a line of text and advances y.
 */
function drawLine(state, text, font, fontSize, color = COLOR_DARK, lineHeight = null) {
  state.page.drawText(text, {
    x: MARGIN_LEFT,
    y: state.y,
    size: fontSize,
    font,
    color,
  });
  state.y -= (lineHeight || fontSize * 1.4);
}

/**
 * Draws wrapped paragraph text, paginating as needed.
 */
async function drawParagraph(state, text, font, fontSize, lineHeight, indent = 0) {
  const lines = wrapText(text, font, fontSize, CONTENT_WIDTH - indent);
  for (const line of lines) {
    await ensureSpace(state, lineHeight);
    state.page.drawText(line, {
      x: MARGIN_LEFT + indent,
      y: state.y,
      size: fontSize,
      font,
      color: COLOR_DARK,
    });
    state.y -= lineHeight;
  }
}

/**
 * Main PDF generation function.
 * Returns Uint8Array of the PDF bytes.
 */
async function generateWaiverPDF(checkInData) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const templateBytes = loadTemplateBytes();
  const logoBytes     = loadLogoBytes();

  const state = { pdfDoc, templateBytes, page: null, y: MARGIN_TOP };

  // ─── Page 1 ────────────────────────────────────────────────────────────────
  state.page = await addPageWithBackground(pdfDoc, templateBytes);
  state.y = MARGIN_TOP;

  const dateStr = new Date(checkInData.checkInTime || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // ── Header: centered logo, centered company name, centered waiver title, date right ──
  // Logo image (centered)
  const logoImage  = await pdfDoc.embedPng(logoBytes);
  const logoHeight = 55;
  const logoWidth  = logoHeight * (logoImage.width / logoImage.height);
  state.page.drawImage(logoImage, {
    x: (PAGE_WIDTH - logoWidth) / 2,
    y: state.y - logoHeight,
    width:  logoWidth,
    height: logoHeight,
  });
  state.y -= (logoHeight + 6);

  // "RELIANCE SURFACES" — centered, gold
  const companyText  = 'RELIANCE SURFACES';
  const companyWidth = fontBold.widthOfTextAtSize(companyText, FONT_SIZE_TITLE);
  state.page.drawText(companyText, {
    x: (PAGE_WIDTH - companyWidth) / 2, y: state.y,
    size: FONT_SIZE_TITLE, font: fontBold, color: COLOR_GOLD,
  });
  state.y -= LINE_HEIGHT_TITLE;

  // "WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT" — centered, black
  const waiverTitleText = 'WAIVER AND RELEASE, INDEMNITY AGREEMENT,';
  const waiverTitleText2 = 'AND INFORMED CONSENT';
  const FONT_SIZE_WAIVER_TITLE = 11;
  const waiverTitleWidth = fontBold.widthOfTextAtSize(waiverTitleText, FONT_SIZE_WAIVER_TITLE);
  state.page.drawText(waiverTitleText, {
    x: (PAGE_WIDTH - waiverTitleWidth) / 2, y: state.y,
    size: FONT_SIZE_WAIVER_TITLE, font: fontBold, color: COLOR_BLACK,
  });
  state.y -= LINE_HEIGHT_HEADER;
  const waiverTitleWidth2 = fontBold.widthOfTextAtSize(waiverTitleText2, FONT_SIZE_WAIVER_TITLE);
  state.page.drawText(waiverTitleText2, {
    x: (PAGE_WIDTH - waiverTitleWidth2) / 2, y: state.y,
    size: FONT_SIZE_WAIVER_TITLE, font: fontBold, color: COLOR_BLACK,
  });
  state.y -= LINE_HEIGHT_TITLE;

  // Date — right-aligned
  const dateText  = `Date: ${dateStr}`;
  const dateWidth = fontRegular.widthOfTextAtSize(dateText, FONT_SIZE_BODY);
  state.page.drawText(dateText, {
    x: MARGIN_RIGHT - dateWidth, y: state.y,
    size: FONT_SIZE_BODY, font: fontRegular, color: COLOR_DARK,
  });
  state.y -= LINE_HEIGHT_BODY * 2;

  // ── Divider ──────────────────────────────────────────────────────────────────
  state.page.drawLine({
    start: { x: MARGIN_LEFT, y: state.y + 4 },
    end:   { x: MARGIN_RIGHT, y: state.y + 4 },
    thickness: 0.5, color: COLOR_GOLD,
  });
  state.y -= LINE_HEIGHT_BODY;

  // ── Section 1: Waiver Text (no heading, paragraphs only) ───────────────────
  for (const paragraph of WAIVER_PARAGRAPHS) {
    await drawParagraph(state, paragraph, fontRegular, FONT_SIZE_BODY, LINE_HEIGHT_BODY);
    state.y -= LINE_HEIGHT_BODY * 0.6;
  }

  state.y -= LINE_HEIGHT_BODY;

  // ── Section 2: Customer Information ─────────────────────────────────────────
  await ensureSpace(state, LINE_HEIGHT_HEADER + LINE_HEIGHT_BODY);
  state.page.drawText('CUSTOMER INFORMATION', {
    x: MARGIN_LEFT, y: state.y,
    size: FONT_SIZE_HEADER, font: fontBold, color: COLOR_BLACK,
  });
  state.y -= LINE_HEIGHT_HEADER;

  const addressFull = checkInData.suiteUnit
    ? `${checkInData.street}, ${checkInData.suiteUnit}, ${checkInData.city}, ${checkInData.state} ${checkInData.zip}`
    : `${checkInData.street}, ${checkInData.city}, ${checkInData.state} ${checkInData.zip}`;

  const infoLines = [
    `Customer Name:  ${checkInData.firstName} ${checkInData.lastName}`,
    `Address:        ${addressFull}`,
    `Country:        ${checkInData.country}`,
    `Phone(s):       ${checkInData.phones.join(', ')}`,
    `Email(s):       ${checkInData.emails.join(', ')}`,
  ];

  for (const line of infoLines) {
    await ensureSpace(state, LINE_HEIGHT_BODY);
    drawLine(state, line, fontRegular, FONT_SIZE_BODY, COLOR_DARK, LINE_HEIGHT_BODY);
  }
  state.y -= LINE_HEIGHT_BODY;

  // ── Section 3: Referral Sources ──────────────────────────────────────────────
  if (checkInData.referralSources && checkInData.referralSources.length > 0) {
    await ensureSpace(state, LINE_HEIGHT_HEADER + LINE_HEIGHT_BODY);
    state.page.drawText('HOW DID YOU HEAR ABOUT US?', {
      x: MARGIN_LEFT, y: state.y,
      size: FONT_SIZE_HEADER, font: fontBold, color: COLOR_BLACK,
    });
    state.y -= LINE_HEIGHT_HEADER;

    for (const ref of checkInData.referralSources) {
      await ensureSpace(state, LINE_HEIGHT_BODY);
      const refLine = ref.phone
        ? `• ${ref.type}: ${ref.name} — ${ref.phone}`
        : `• ${ref.type}: ${ref.name}`;
      drawLine(state, refLine, fontRegular, FONT_SIZE_BODY, COLOR_DARK, LINE_HEIGHT_BODY);
    }
    state.y -= LINE_HEIGHT_BODY;
  }

  // ── Section 4: Party Size ────────────────────────────────────────────────────
  await ensureSpace(state, LINE_HEIGHT_HEADER + LINE_HEIGHT_BODY);
  state.page.drawText('PARTY INFORMATION', {
    x: MARGIN_LEFT, y: state.y,
    size: FONT_SIZE_HEADER, font: fontBold, color: COLOR_BLACK,
  });
  state.y -= LINE_HEIGHT_HEADER;

  const { adults, minors } = checkInData.partySize;
  drawLine(
    state,
    `Party Size: ${adults} Adult${adults !== 1 ? 's' : ''}${minors > 0 ? `, ${minors} Minor${minors !== 1 ? 's' : ''}` : ''}`,
    fontRegular, FONT_SIZE_BODY, COLOR_DARK, LINE_HEIGHT_BODY
  );
  state.y -= LINE_HEIGHT_BODY;

  // ── Section 5: Signatures ─────────────────────────────────────────────────────
  await ensureSpace(state, LINE_HEIGHT_HEADER);
  state.page.drawText('SIGNATURES', {
    x: MARGIN_LEFT, y: state.y,
    size: FONT_SIZE_HEADER, font: fontBold, color: COLOR_BLACK,
  });
  state.y -= LINE_HEIGHT_HEADER;

  const agreementText = 'I have read and agree to the terms of the above Waiver & Release.';
  await drawParagraph(state, agreementText, fontRegular, FONT_SIZE_BODY, LINE_HEIGHT_BODY);
  state.y -= LINE_HEIGHT_BODY;

  const adultVisitors = (checkInData.visitors || []).filter(v => !v.isMinor);

  for (let i = 0; i < adultVisitors.length; i++) {
    const visitor = adultVisitors[i];
    const label = visitor.isMain ? 'Main Customer' : `Additional Visitor ${i + 1}`;

    // Need space for: label (12) + name (12) + signature (65) + date (12) + gap (16)
    await ensureSpace(state, 12 + 12 + 65 + 12 + 16);

    state.page.drawText(label, {
      x: MARGIN_LEFT, y: state.y,
      size: FONT_SIZE_BODY, font: fontBold, color: COLOR_BLACK,
    });
    state.y -= LINE_HEIGHT_BODY;

    state.page.drawText(`Name: ${visitor.name}`, {
      x: MARGIN_LEFT, y: state.y,
      size: FONT_SIZE_BODY, font: fontRegular, color: COLOR_DARK,
    });
    state.y -= LINE_HEIGHT_BODY;

    // Embed signature image if present
    if (visitor.signature) {
      try {
        const sigBuffer = decodeSignatureToBuffer(visitor.signature);
        const sigImage  = await pdfDoc.embedPng(sigBuffer);
        const sigHeight = 55;
        const sigWidth  = 200;

        await ensureSpace(state, sigHeight + 4);
        state.page.drawImage(sigImage, {
          x: MARGIN_LEFT,
          y: state.y - sigHeight,
          width:  sigWidth,
          height: sigHeight,
        });
        state.y -= (sigHeight + 4);
      } catch (err) {
        // Signature decode failed — draw placeholder line
        state.page.drawText('Signature: [unable to render]', {
          x: MARGIN_LEFT, y: state.y,
          size: FONT_SIZE_SMALL, font: fontRegular, color: COLOR_DARK,
        });
        state.y -= LINE_HEIGHT_BODY;
      }
    } else {
      state.page.drawText('Signature: ——————————————————', {
        x: MARGIN_LEFT, y: state.y,
        size: FONT_SIZE_BODY, font: fontRegular, color: COLOR_DARK,
      });
      state.y -= LINE_HEIGHT_BODY;
    }

    state.page.drawText(`Date: ${dateStr}`, {
      x: MARGIN_LEFT, y: state.y,
      size: FONT_SIZE_BODY, font: fontRegular, color: COLOR_DARK,
    });
    state.y -= LINE_HEIGHT_BODY;
    state.y -= LINE_HEIGHT_BODY; // gap between visitors
  }

  // ── Section 6: Minors ─────────────────────────────────────────────────────────
  const minorVisitors = (checkInData.visitors || []).filter(v => v.isMinor);
  if (minorVisitors.length > 0) {
    await ensureSpace(state, LINE_HEIGHT_HEADER + LINE_HEIGHT_BODY);
    state.page.drawText('MINORS IN PARTY', {
      x: MARGIN_LEFT, y: state.y,
      size: FONT_SIZE_HEADER, font: fontBold, color: COLOR_BLACK,
    });
    state.y -= LINE_HEIGHT_HEADER;

    for (const minor of minorVisitors) {
      await ensureSpace(state, LINE_HEIGHT_BODY);
      drawLine(state, `• ${minor.name}`, fontRegular, FONT_SIZE_BODY, COLOR_DARK, LINE_HEIGHT_BODY);
    }

    await ensureSpace(state, LINE_HEIGHT_BODY);
    drawLine(state, '(No signatures required — under 18)', fontRegular, FONT_SIZE_SMALL, COLOR_DARK, LINE_HEIGHT_BODY);
    state.y -= LINE_HEIGHT_BODY;
  }

  // ── Section 7: Footer ─────────────────────────────────────────────────────────
  // Place footer at bottom of current page
  const footerY = MARGIN_BOTTOM - 10;
  state.page.drawLine({
    start: { x: MARGIN_LEFT, y: footerY + 16 },
    end:   { x: MARGIN_RIGHT, y: footerY + 16 },
    thickness: 0.5, color: COLOR_GOLD,
  });
  state.page.drawText(`Document ID: ${checkInData.id || 'N/A'}   |   Generated: ${new Date().toISOString()}`, {
    x: MARGIN_LEFT, y: footerY,
    size: FONT_SIZE_SMALL, font: fontRegular, color: COLOR_DARK,
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

module.exports = { generateWaiverPDF };
