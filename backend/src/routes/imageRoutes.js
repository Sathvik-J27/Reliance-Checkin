const express  = require('express');
const multer   = require('multer');

const customerAuth   = require('../middleware/customerAuth');
const ipWhitelist    = require('../middleware/ipWhitelist');
const { validateLogin, validateQuantityUpdate } = require('../validators/imageValidator');
const {
  authenticateByPhone,
  saveImage,
  getImagesByCheckInId,
  getImagesByPhone,
  updateImageQuantity,
  deleteImage,
  getImageById,
} = require('../services/imageService');
const { uploadImage, deleteImageFromStorage } = require('../services/storageService');

const router = express.Router();

// ── Multer: memory storage, image-only filter, 10MB per file, max 15 files ──
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter(_req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error(`File "${file.originalname}" is not an image`));
    }
  },
});

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// ── POST /api/customer/login ──────────────────────────────────────────────
/**
 * Public — no auth required.
 * Body: { phone }
 * Looks up the most recent check-in for that phone, issues a 2-hour token.
 * Returns: { authToken, checkInId, customerName }
 */
router.post('/customer/login', async (req, res, next) => {
  try {
    const validation = validateLogin(req.body);
    if (!validation.success) {
      return res.status(400).json({ success: false, error: 'Validation failed', details: validation.errors });
    }

    const result = await authenticateByPhone(validation.data.phone);

    if (!result) {
      return res.status(401).json({ success: false, error: 'No check-in found for this phone number' });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/images/upload ───────────────────────────────────────────────
/**
 * customerAuth required.
 * Multipart form-data:
 *   - images: up to 15 image files (10MB each)
 *   - quantities: JSON string, e.g. [1, 2, 1] (one per file, in order)
 *
 * Returns the array of saved image records.
 */
router.post(
  '/images/upload',
  customerAuth,
  upload.array('images', 15),
  async (req, res, next) => {
    try {
      const files = req.files || [];

      if (files.length === 0) {
        return res.status(400).json({ success: false, error: 'No images provided' });
      }

      // Parse per-file quantities (optional — defaults to 1)
      let quantities = [];
      try {
        quantities = req.body.quantities ? JSON.parse(req.body.quantities) : [];
      } catch {
        // ignore malformed JSON — fall back to all-1s
      }

      const checkInId = req.customerCheckIn.id;

      // Find the current max sort_order so new images append in order
      const existing = await getImagesByCheckInId(checkInId);
      let sortBase   = existing.length;

      const savedImages = [];

      for (let i = 0; i < files.length; i++) {
        const file     = files[i];
        const quantity = Number.isInteger(quantities[i]) && quantities[i] >= 1
          ? Math.min(quantities[i], 99)
          : 1;

        const { publicUrl, storagePath } = await uploadImage(
          file.buffer,
          checkInId,
          file.originalname,
          file.mimetype,
        );

        const record = await saveImage(checkInId, publicUrl, storagePath, quantity, sortBase + i);
        savedImages.push(record);
      }

      return res.status(201).json({ success: true, data: savedImages });
    } catch (err) {
      next(err);
    }
  },
);

// ── GET /api/images/check-in/:checkInId ──────────────────────────────────
/**
 * customerAuth required.
 * Returns all images for the check-in, but only if the token belongs to that check-in.
 */
router.get('/images/check-in/:checkInId', customerAuth, async (req, res, next) => {
  try {
    const { checkInId } = req.params;

    if (!UUID_RE.test(checkInId)) {
      return res.status(400).json({ success: false, error: 'Invalid check-in ID format' });
    }

    // Enforce that the token owner can only read their own check-in
    if (req.customerCheckIn.id !== checkInId) {
      return res.status(403).json({ success: false, error: 'Access denied' });
    }

    const images = await getImagesByCheckInId(checkInId);
    return res.status(200).json({ success: true, data: images });
  } catch (err) {
    next(err);
  }
});

// ── PATCH /api/images/:imageId/quantity ──────────────────────────────────
/**
 * customerAuth required.
 * Body: { quantity } (1-99)
 * Only the owner of the check-in the image belongs to may update it.
 */
router.patch('/images/:imageId/quantity', customerAuth, async (req, res, next) => {
  try {
    const { imageId } = req.params;

    if (!UUID_RE.test(imageId)) {
      return res.status(400).json({ success: false, error: 'Invalid image ID format' });
    }

    const validation = validateQuantityUpdate(req.body);
    if (!validation.success) {
      return res.status(400).json({ success: false, error: 'Validation failed', details: validation.errors });
    }

    // Verify ownership
    const image = await getImageById(imageId);
    if (!image) {
      return res.status(404).json({ success: false, error: 'Image not found' });
    }
    if (image.check_in_id !== req.customerCheckIn.id) {
      return res.status(403).json({ success: false, error: 'Access denied' });
    }

    const updated = await updateImageQuantity(imageId, validation.data.quantity);
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
});

// ── DELETE /api/images/:imageId ───────────────────────────────────────────
/**
 * customerAuth required.
 * Deletes the image from both the DB and Supabase Storage.
 * Only the check-in owner may delete their own images.
 */
router.delete('/images/:imageId', customerAuth, async (req, res, next) => {
  try {
    const { imageId } = req.params;

    if (!UUID_RE.test(imageId)) {
      return res.status(400).json({ success: false, error: 'Invalid image ID format' });
    }

    // Verify ownership and get storagePath before deleting
    const image = await getImageById(imageId);
    if (!image) {
      return res.status(404).json({ success: false, error: 'Image not found' });
    }
    if (image.check_in_id !== req.customerCheckIn.id) {
      return res.status(403).json({ success: false, error: 'Access denied' });
    }

    // Delete from storage first, then DB (best-effort: log storage errors but still remove DB row)
    try {
      await deleteImageFromStorage(image.storage_path);
    } catch (storageErr) {
      console.error(`[DeleteImage ${imageId}] Storage removal failed:`, storageErr.message);
    }

    await deleteImage(imageId);

    return res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/images/customer/:phone ──────────────────────────────────────
/**
 * IP whitelist — staff-only endpoint.
 * Returns all images grouped by check-in date for a given customer phone.
 * Used by CustomerPopup and Staff2ViewPopup.
 */
router.get('/images/customer/:phone', ipWhitelist, async (req, res, next) => {
  try {
    const { phone } = req.params;

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ success: false, error: 'Phone must be exactly 10 digits' });
    }

    const grouped = await getImagesByPhone(phone);
    return res.status(200).json({ success: true, data: grouped });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
