const { z } = require('zod');

const phoneRegex = /^\d{10}$/;

// ── Schemas ────────────────────────────────────────────────────────────────

const loginSchema = z.object({
  phone: z.string().regex(phoneRegex, 'Phone must be exactly 10 digits'),
});

const quantityUpdateSchema = z.object({
  quantity: z.number().int().min(1, 'Quantity must be at least 1').max(99, 'Quantity cannot exceed 99'),
});

const surveySchema = z.object({
  starRating: z.number().int().min(1, 'Star rating must be between 1 and 5').max(5, 'Star rating must be between 1 and 5'),
  comment:    z.string().max(2000, 'Comment cannot exceed 2000 characters').optional(),
});

// ── Validator helpers ──────────────────────────────────────────────────────

/**
 * Validates the customer login request body.
 * Returns { success, data, errors }
 */
function validateLogin(body) {
  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return { success: false, errors: result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`) };
  }
  return { success: true, data: result.data };
}

/**
 * Validates an image quantity-update request body.
 * Returns { success, data, errors }
 */
function validateQuantityUpdate(body) {
  const result = quantityUpdateSchema.safeParse(body);
  if (!result.success) {
    return { success: false, errors: result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`) };
  }
  return { success: true, data: result.data };
}

/**
 * Validates a survey submission request body.
 * Returns { success, data, errors }
 */
function validateSurvey(body) {
  const result = surveySchema.safeParse(body);
  if (!result.success) {
    return { success: false, errors: result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`) };
  }
  return { success: true, data: result.data };
}

module.exports = { validateLogin, validateQuantityUpdate, validateSurvey };
