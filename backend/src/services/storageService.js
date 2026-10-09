const crypto  = require('crypto');
const path    = require('path');
const { PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const r2 = require('../config/r2');

// Waivers live at the bucket root (YYYY/MM/DD/...); customer images under IMAGE_PREFIX.
const BUCKET       = process.env.R2_BUCKET;
const PUBLIC_URL   = process.env.R2_PUBLIC_URL.replace(/\/+$/, '');
const IMAGE_PREFIX = 'customer-images';

/** Public URL for an object key (served via the bucket's r2.dev / custom domain). */
function publicUrlFor(key) {
  return `${PUBLIC_URL}/${key}`;
}

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
  const base = basePath.substring(0, basePath.lastIndexOf('.pdf'));

  // Every key sharing this base name (e.g. X_Waiver.pdf, X_Waiver_1.pdf, ...)
  const { Contents } = await r2.send(new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: base,
  }));
  const usedKeys = new Set((Contents || []).map(o => o.Key));

  if (!usedKeys.has(basePath)) {
    return basePath;
  }

  let counter = 1;
  while (usedKeys.has(`${base}_${counter}.pdf`)) {
    counter++;
  }
  return `${base}_${counter}.pdf`;
}

/**
 * Uploads a PDF buffer to R2 with retry logic.
 * Returns the public URL of the uploaded file.
 */
async function uploadPdf(pdfBytes, filePath, retries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Re-resolve each attempt in case another upload took the name meanwhile
      const uniquePath = await resolveUniquePath(filePath);
      await r2.send(new PutObjectCommand({
        Bucket:      BUCKET,
        Key:         uniquePath,
        Body:        pdfBytes,
        ContentType: 'application/pdf',
      }));
      return publicUrlFor(uniquePath);
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 500 * attempt));
      }
    }
  }

  throw new Error(`PDF upload failed after ${retries} attempts: ${lastError?.message}`);
}

/**
 * Uploads an image buffer to R2 under the customer-images prefix.
 * Path: {checkInId}/{uuid}.{ext}
 *
 * @param {Buffer} imageBuffer        - Raw image bytes
 * @param {string} checkInId          - UUID of the check-in (used as folder)
 * @param {string} originalFilename   - Original file name (used to derive extension)
 * @param {string} contentType        - MIME type (e.g. "image/jpeg")
 * @returns {{ publicUrl: string, storagePath: string }}
 */
async function uploadImage(imageBuffer, checkInId, originalFilename, contentType) {
  const ext         = path.extname(originalFilename || '').toLowerCase() || '.jpg';
  const uuid        = crypto.randomUUID();
  const storagePath = `${checkInId}/${uuid}${ext}`;
  const key         = `${IMAGE_PREFIX}/${storagePath}`;

  try {
    await r2.send(new PutObjectCommand({
      Bucket:      BUCKET,
      Key:         key,
      Body:        imageBuffer,
      ContentType: contentType,
    }));
  } catch (err) {
    throw new Error(`Image upload failed: ${err.message}`);
  }

  return { publicUrl: publicUrlFor(key), storagePath };
}

/**
 * Removes an image file from R2.
 * Called alongside the DB deletion in imageService.deleteImage.
 *
 * @param {string} storagePath - The path that was returned by uploadImage
 */
async function deleteImageFromStorage(storagePath) {
  try {
    await r2.send(new DeleteObjectCommand({
      Bucket: BUCKET,
      Key:    `${IMAGE_PREFIX}/${storagePath}`,
    }));
  } catch (err) {
    throw new Error(`Failed to delete image from storage: ${err.message}`);
  }
}

module.exports = { buildFilePath, uploadPdf, uploadImage, deleteImageFromStorage };
