const { z } = require('zod');

const phoneRegex = /^\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const visitorSchema = z.object({
  name: z.string().min(1, 'Visitor name is required'),
  signature: z.string(),
  isMain: z.boolean().optional(),
  isMinor: z.boolean().optional(),
});

const referralSourceSchema = z.object({
  type: z.string().min(1, 'Referral type is required'),
  name: z.string().min(1, 'Referral name is required'),
  phone: z.string().optional(),
});

const checkInSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName:  z.string().min(1, 'Last name is required').max(100),
  street:    z.string().min(1, 'Street is required').max(255),
  suiteUnit: z.string().max(50).optional().default(''),
  city:      z.string().min(1, 'City is required').max(100),
  state:     z.string().min(1, 'State is required').max(50),
  zip:       z.string().min(1, 'ZIP is required').max(20),
  country:   z.string().min(2).max(3),

  phones: z
    .array(z.string().regex(phoneRegex, 'Phone must be exactly 10 digits'))
    .min(1, 'At least one phone number is required'),

  emails: z
    .array(z.string().regex(emailRegex, 'Invalid email format'))
    .min(1, 'At least one email is required'),

  referralSources: z.array(referralSourceSchema).default([]),

  signature: z.string().min(1, 'Signature is required'),

  partySize: z.object({
    adults: z.number().int().min(1, 'At least 1 adult required').max(20),
    minors: z.number().int().min(0).max(20),
  }),

  visitors: z.array(visitorSchema).min(1, 'At least one visitor is required'),

  checkInTime: z.string().datetime({ offset: true }).optional(),

  isRevisit: z.boolean().optional().default(false),
});

/**
 * Validates and sanitizes check-in input.
 * Returns { success, data, errors }
 */
function validateCheckIn(body) {
  const result = checkInSchema.safeParse(body);

  if (!result.success) {
    const errors = result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`);
    return { success: false, errors };
  }

  // Sanitize strings — strip control characters
  const sanitize = (str) => str.replace(/[\x00-\x1F\x7F]/g, '').trim();
  const data = result.data;

  return {
    success: true,
    data: {
      ...data,
      firstName:     sanitize(data.firstName),
      lastName:      sanitize(data.lastName),
      street:        sanitize(data.street),
      suiteUnit:     sanitize(data.suiteUnit || ''),
      city:          sanitize(data.city),
      state:         sanitize(data.state),
      zip:           sanitize(data.zip),
      country:       sanitize(data.country),
    },
  };
}

module.exports = { validateCheckIn };
