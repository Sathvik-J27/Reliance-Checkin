const supabase = require('../config/supabase');

const BUCKET = process.env.STORAGE_BUCKET || 'waivers';

/**
 * Sanitizes a name component for use in a file path.
 * Replaces spaces/apostrophes/hyphens with underscores and strips other
 * non-alphanumeric characters (except underscore and dot).
 */
function sanitizeName(str) {
  return str
    .replace(/['\-\s]+/g, '_')      // apostrophe, hyphen, whitespace → _
    .replace(/[^a-zA-Z0-9_.]/g, '') // strip everything else
    .replace(/_+/g, '_')            // collapse consecutive underscores
    .replace(/^_|_$/g, '');         // trim leading/trailing underscores
}

/**
 * Builds the storage path for a waiver PDF.
 * Format: YYYY/MM/DD/FirstName_LastName_Waiver.pdf
 */
function buildFilePath(firstName, lastName, checkInTime) {
  const date  = new Date(checkInTime || Date.now());
  const year  = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day   = String(date.getDate()).padStart(2, '0');

  const safeFirst = sanitizeName(firstName);
  const safeLast  = sanitizeName(lastName);
  const fileName  = `${safeFirst}_${safeLast}_Waiver.pdf`;

  return `${year}/${month}/${day}/${fileName}`;
}

/**
 * Resolves a unique file path by appending _1, _2, etc. when a file
 * with the same base name already exists in the bucket on the same day.
 */
async function resolveUniquePath(basePath) {
  // Check if the base path exists
  const { data: existing } = await supabase.storage
    .from(BUCKET)
    .list(basePath.substring(0, basePath.lastIndexOf('/')), {
      search: basePath.substring(basePath.lastIndexOf('/') + 1),
    });

  if (!existing || existing.length === 0) {
    return basePath;
  }

  // File exists — find a unique suffix
  const dotIndex  = basePath.lastIndexOf('.pdf');
  const base      = basePath.substring(0, dotIndex);
  const dir       = basePath.substring(0, basePath.lastIndexOf('/'));
  const baseName  = base.substring(base.lastIndexOf('/') + 1);

  const { data: siblings } = await supabase.storage
    .from(BUCKET)
    .list(dir);

  const usedNames = new Set((siblings || []).map(f => f.name));

  let counter = 1;
  let candidate;
  do {
    candidate = `${dir}/${baseName}_${counter}.pdf`;
    counter++;
  } while (usedNames.has(`${baseName}_${counter - 1}.pdf`));

  return candidate;
}

/**
 * Uploads a PDF buffer to Supabase Storage with retry logic.
 * Returns the public URL of the uploaded file.
 */
async function uploadPdf(pdfBytes, filePath, retries = 3) {
  const uniquePath = await resolveUniquePath(filePath);

  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(uniquePath, pdfBytes, {
        contentType: 'application/pdf',
        upsert: false,
      });

    if (!error) {
      // Get URL — for private bucket this produces a path-based URL
      const { data: urlData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(uniquePath);

      return urlData.publicUrl;
    }

    lastError = error;

    // If the file already exists at this path (race condition), resolve again
    if (error.message && error.message.toLowerCase().includes('already exists')) {
      const fallback = await resolveUniquePath(filePath);
      const { error: retryError } = await supabase.storage
        .from(BUCKET)
        .upload(fallback, pdfBytes, { contentType: 'application/pdf', upsert: false });

      if (!retryError) {
        const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(fallback);
        return urlData.publicUrl;
      }
    }

    if (attempt < retries) {
      await new Promise(r => setTimeout(r, 500 * attempt));
    }
  }

  throw new Error(`PDF upload failed after ${retries} attempts: ${lastError?.message}`);
}

module.exports = { buildFilePath, uploadPdf };
