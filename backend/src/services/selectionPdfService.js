const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '../../assets/waiver-template.png');

const PAGE_WIDTH  = 612;
const PAGE_HEIGHT = 792;
const MARGIN_L    = 50;
const MARGIN_R    = 562;
const CONTENT_W   = MARGIN_R - MARGIN_L;
const MARGIN_TOP  = 742;
const MARGIN_BOT  = 60;

const SZ_TITLE  = 16;
const SZ_HEAD   = 11;
const SZ_BODY   = 8.5;
const SZ_SMALL  = 7.5;

const LH_TITLE  = 22;
const LH_HEAD   = 16;
const LH_BODY   = 12;

const COLOR_GOLD  = rgb(0.68, 0.52, 0.14);
const COLOR_BLACK = rgb(0.1, 0.1, 0.1);
const COLOR_DARK  = rgb(0.2, 0.2, 0.2);
const COLOR_GRAY  = rgb(0.5, 0.5, 0.5);

function loadTemplate() {
  return fs.readFileSync(TEMPLATE_PATH);
}

function wrapText(text, font, size, maxWidth) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function addPage(pdfDoc, templateBytes) {
  const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const img = await pdfDoc.embedPng(templateBytes);
  page.drawImage(img, { x: 0, y: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT });
  return page;
}

async function ensureSpace(s, needed) {
  if (s.y - needed < MARGIN_BOT) {
    s.page = await addPage(s.pdfDoc, s.template);
    s.y = MARGIN_TOP;
  }
}

function drawText(s, text, font, size, color = COLOR_DARK, lh = null, x = MARGIN_L) {
  s.page.drawText(String(text), { x, y: s.y, size, font, color });
  s.y -= (lh ?? size * 1.4);
}

async function drawWrapped(s, text, font, size, lh, indent = 0) {
  const lines = wrapText(text, font, size, CONTENT_W - indent);
  for (const line of lines) {
    await ensureSpace(s, lh);
    s.page.drawText(line, { x: MARGIN_L + indent, y: s.y, size, font, color: COLOR_DARK });
    s.y -= lh;
  }
}

function drawDivider(s, color = COLOR_GOLD) {
  s.page.drawLine({
    start: { x: MARGIN_L, y: s.y + 4 },
    end:   { x: MARGIN_R, y: s.y + 4 },
    thickness: 0.5, color,
  });
  s.y -= LH_BODY;
}

/**
 * Draws a table with column definitions: [{ header, key, width }]
 * Handles text wrapping within cells.
 */
async function drawTable(s, columns, rows, fontBold, fontRegular) {
  const ROW_PAD = 6;
  const MIN_ROW_H = 20;

  // Header row background
  await ensureSpace(s, MIN_ROW_H + ROW_PAD * 2);
  const headerY = s.y;
  const totalW = columns.reduce((acc, c) => acc + c.width, 0);

  s.page.drawRectangle({
    x: MARGIN_L, y: headerY - MIN_ROW_H - ROW_PAD,
    width: totalW, height: MIN_ROW_H + ROW_PAD,
    color: rgb(0.15, 0.15, 0.15),
  });

  let cx = MARGIN_L;
  for (const col of columns) {
    s.page.drawText(col.header, {
      x: cx + 4, y: headerY - SZ_BODY - ROW_PAD + 2,
      size: SZ_BODY, font: fontBold, color: COLOR_GOLD,
    });
    cx += col.width;
  }
  s.y -= (MIN_ROW_H + ROW_PAD + 4);

  // Data rows
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    // Calculate row height based on tallest cell
    let maxLines = 1;
    for (const col of columns) {
      const val = String(row[col.key] ?? '');
      const lines = wrapText(val, fontRegular, SZ_SMALL, col.width - 8);
      maxLines = Math.max(maxLines, lines.length);
    }
    const rowH = Math.max(MIN_ROW_H, maxLines * (SZ_SMALL + 2) + ROW_PAD * 2);

    await ensureSpace(s, rowH + 4);

    const rowY = s.y;
    const bg = i % 2 === 0 ? rgb(0.12, 0.12, 0.12) : rgb(0.16, 0.16, 0.16);
    s.page.drawRectangle({
      x: MARGIN_L, y: rowY - rowH,
      width: totalW, height: rowH,
      color: bg,
    });

    cx = MARGIN_L;
    for (const col of columns) {
      const val = String(row[col.key] ?? '');
      const lines = wrapText(val, fontRegular, SZ_SMALL, col.width - 8);
      let lineY = rowY - ROW_PAD - SZ_SMALL;
      for (const line of lines) {
        s.page.drawText(line, {
          x: cx + 4, y: lineY,
          size: SZ_SMALL, font: fontRegular, color: rgb(0.9, 0.9, 0.9),
        });
        lineY -= (SZ_SMALL + 2);
      }
      cx += col.width;
    }

    s.y -= (rowH + 2);
  }
}

/**
 * Generates the Selection Sheet PDF.
 * Returns Uint8Array of PDF bytes.
 */
async function generateSelectionPDF(data) {
  const {
    checkInId,
    customerName,
    customerEmails,
    customerCheckInTime,
    fabricator,
    materials,
    helpedBy,
    selectionSheetNumber,
  } = data;

  const pdfDoc = await PDFDocument.create();
  const fontBold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const template    = loadTemplate();

  const s = { pdfDoc, template, page: null, y: MARGIN_TOP };
  s.page = await addPage(pdfDoc, template);

  const dateStr = new Date(customerCheckInTime || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // ── Header ────────────────────────────────────────────────────────────────
  s.page.drawText('RELIANCE SURFACES', {
    x: MARGIN_L, y: s.y, size: SZ_TITLE, font: fontBold, color: COLOR_GOLD,
  });
  s.y -= LH_TITLE;

  s.page.drawText('SELECTION SHEET', {
    x: MARGIN_L, y: s.y, size: SZ_TITLE, font: fontBold, color: COLOR_BLACK,
  });

  // Sheet number top-right
  s.page.drawText(`Sheet #: ${selectionSheetNumber || 'N/A'}`, {
    x: MARGIN_R - fontBold.widthOfTextAtSize(`Sheet #: ${selectionSheetNumber || 'N/A'}`, SZ_HEAD),
    y: s.y, size: SZ_HEAD, font: fontBold, color: COLOR_GOLD,
  });
  s.y -= LH_TITLE;

  s.page.drawText(`Date: ${dateStr}   |   Helped By: ${helpedBy || 'N/A'}`, {
    x: MARGIN_L, y: s.y, size: SZ_BODY, font: fontRegular, color: COLOR_DARK,
  });
  s.y -= LH_BODY * 2;

  drawDivider(s);

  // ── Customer Info ──────────────────────────────────────────────────────────
  drawText(s, 'CUSTOMER', fontBold, SZ_HEAD, COLOR_BLACK, LH_HEAD);
  drawText(s, `Name:   ${customerName}`, fontRegular, SZ_BODY, COLOR_DARK, LH_BODY);
  if (customerEmails && customerEmails.length) {
    drawText(s, `Email:  ${customerEmails.join(', ')}`, fontRegular, SZ_BODY, COLOR_DARK, LH_BODY);
  }
  s.y -= LH_BODY;

  // ── Fabricator Info ────────────────────────────────────────────────────────
  await ensureSpace(s, LH_HEAD + LH_BODY * 5);
  drawText(s, 'FABRICATOR', fontBold, SZ_HEAD, COLOR_BLACK, LH_HEAD);

  if (fabricator) {
    const fabLines = [
      `Company:      ${fabricator.companyName || ''}`,
      `Address:      ${fabricator.address || ''}, ${fabricator.city || ''}, ${fabricator.state || ''} ${fabricator.zip || ''}`,
      `Phone 1:      ${fabricator.phone1 || ''}${fabricator.phone2 ? `   Phone 2: ${fabricator.phone2}` : ''}${fabricator.mobile ? `   Mobile: ${fabricator.mobile}` : ''}`,
      `Email:        ${fabricator.email || ''}`,
      `Sales Person: ${fabricator.salesPerson || ''}`,
    ];
    for (const line of fabLines) {
      await ensureSpace(s, LH_BODY);
      drawText(s, line, fontRegular, SZ_BODY, COLOR_DARK, LH_BODY);
    }
  } else {
    drawText(s, 'No fabricator selected', fontRegular, SZ_BODY, COLOR_GRAY, LH_BODY);
  }
  s.y -= LH_BODY;

  drawDivider(s, COLOR_GRAY);

  // ── Materials Table ────────────────────────────────────────────────────────
  await ensureSpace(s, LH_HEAD + 40);
  drawText(s, 'MATERIALS SELECTED', fontBold, SZ_HEAD, COLOR_BLACK, LH_HEAD);

  if (!materials || materials.length === 0) {
    drawText(s, 'No materials selected.', fontRegular, SZ_BODY, COLOR_GRAY, LH_BODY);
  } else {
    const columns = [
      { header: 'Name',    key: 'name',     width: 110 },
      { header: 'Sold As', key: 'soldAs',   width: 80  },
      { header: 'Finish',  key: 'finish',   width: 70  },
      { header: 'Size',    key: 'sizeStr',  width: 60  },
      { header: 'Lot',     key: 'lot',      width: 50  },
      { header: 'Loc',     key: 'location', width: 55  },
      { header: 'Qty',     key: 'quantity', width: 30  },
      { header: 'Hold',    key: 'holdStr',  width: 57  },
    ];

    const rows = materials.map(m => ({
      name:     m.name || '',
      soldAs:   m.soldAs || '',
      finish:   m.finish || '',
      sizeStr:  m.size ? `${m.size.l || '?'} x ${m.size.h || '?'}` : '',
      lot:      m.lot || '',
      location: m.location || '',
      quantity: m.quantity ?? 1,
      holdStr:  m.hold ? `Yes${m.slabNumbers ? ` (${m.slabNumbers})` : ''}` : 'No',
    }));

    await drawTable(s, columns, rows, fontBold, fontRegular);
  }

  s.y -= LH_BODY;
  drawDivider(s, COLOR_GRAY);

  // ── Footer ─────────────────────────────────────────────────────────────────
  const footerY = Math.min(s.y - LH_BODY, MARGIN_BOT + 10);
  s.page.drawText(
    `Document ID: ${checkInId || 'N/A'}   |   Generated: ${new Date().toISOString()}`,
    { x: MARGIN_L, y: footerY, size: SZ_SMALL, font: fontRegular, color: COLOR_GRAY }
  );

  return await pdfDoc.save();
}

module.exports = { generateSelectionPDF };
