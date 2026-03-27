const express = require('express');

const customerAuth = require('../middleware/customerAuth');
const ipWhitelist  = require('../middleware/ipWhitelist');
const { validateSurvey } = require('../validators/imageValidator');
const { saveSurveyResponse, getAllSurveyResponses } = require('../services/surveyService');

const router = express.Router();

// ── POST /api/survey ──────────────────────────────────────────────────────
/**
 * customerAuth required.
 * Body: { starRating, comment? }
 * Saves a survey response tied to the token owner's check-in.
 * Returns the created record.
 */
router.post('/survey', customerAuth, async (req, res, next) => {
  try {
    const validation = validateSurvey(req.body);
    if (!validation.success) {
      return res.status(400).json({ success: false, error: 'Validation failed', details: validation.errors });
    }

    const { starRating, comment } = validation.data;
    const checkInId = req.customerCheckIn.id;

    const record = await saveSurveyResponse(checkInId, starRating, comment);

    return res.status(201).json({ success: true, data: record });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/survey/responses ─────────────────────────────────────────────
/**
 * IP whitelist — rating dashboard endpoint.
 * Query params:
 *   - page       (number, default 1)
 *   - startDate  (ISO date string, optional)
 *   - endDate    (ISO date string, optional)
 *
 * Returns: { responses, total, page, pageSize }
 */
router.get('/survey/responses', ipWhitelist, async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const { startDate, endDate } = req.query;

    const result = await getAllSurveyResponses({ page, startDate, endDate });

    return res.status(200).json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
