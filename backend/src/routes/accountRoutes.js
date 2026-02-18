const express = require('express');
const supabase = require('../config/supabase');
const cache = require('../utils/searchCache');

const router = express.Router();

/**
 * GET /api/accounts/search?q=<term>
 * CQRS Query: Search accounts by company name (3+ char minimum).
 * Returns up to 10 matches, ordered alphabetically.
 * Results are cached for 5 minutes to reduce DB load.
 */
router.get('/accounts/search', async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();

    if (q.length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Query must be at least 3 characters',
      });
    }

    const cacheKey = `accounts:${q.toLowerCase()}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json({ success: true, data: cached, source: 'cache' });
    }

    cache.prune();

    const { data, error } = await supabase
      .from('accounts')
      .select('company_name, address, city, state, zip, phone1, phone2, mobile, email, sales_person')
      .ilike('company_name', `%${q}%`)
      .order('company_name')
      .limit(10);

    if (error) throw new Error(`Accounts search failed: ${error.message}`);

    // Map snake_case → camelCase to match Fabricator interface
    const results = (data || []).map(row => ({
      id: row.company_name,          // used as React key; no UUID on accounts table
      companyName: row.company_name,
      address:     row.address    || '',
      city:        row.city       || '',
      state:       row.state      || '',
      zip:         row.zip        || '',
      phone1:      row.phone1     || '',
      phone2:      row.phone2     || '',
      mobile:      row.mobile     || '',
      email:       row.email      || '',
      salesPerson: row.sales_person || '',
    }));

    cache.set(cacheKey, results);

    return res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
