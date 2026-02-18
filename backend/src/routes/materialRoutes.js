const express = require('express');
const supabase = require('../config/supabase');
const cache = require('../utils/searchCache');

const router = express.Router();

/**
 * GET /api/materials/search?q=<term>
 * CQRS Query: Search materials by name (3+ char minimum).
 * Returns up to 10 matches, ordered alphabetically.
 * Results are cached for 5 minutes.
 */
router.get('/materials/search', async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();

    if (q.length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Query must be at least 3 characters',
      });
    }

    const cacheKey = `materials:${q.toLowerCase()}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json({ success: true, data: cached, source: 'cache' });
    }

    cache.prune();

    const { data, error } = await supabase
      .from('materials')
      .select('material_name')
      .ilike('material_name', `%${q}%`)
      .order('material_name')
      .limit(10);

    if (error) throw new Error(`Materials search failed: ${error.message}`);

    const results = (data || []).map(row => ({
      id:   row.material_name,
      name: row.material_name,
    }));

    cache.set(cacheKey, results);

    return res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
