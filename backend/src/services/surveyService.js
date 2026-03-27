const supabase = require('../config/supabase');

const PAGE_SIZE = 20;

/**
 * Persists a survey response linked to a check-in.
 * Returns the created record.
 */
async function saveSurveyResponse(checkInId, starRating, comment) {
  const { data, error } = await supabase
    .from('survey_responses')
    .insert({
      check_in_id: checkInId,
      star_rating:  starRating,
      comment:      comment || null,
    })
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to save survey response: ${error.message}`);
  }

  return data;
}

/**
 * Paginated query for all survey responses, optionally filtered by date range.
 * Joins first_name + last_name from check_ins for the rating dashboard.
 *
 * @param {object} filters
 * @param {number}  filters.page       - 1-based page number (default 1)
 * @param {string}  filters.startDate  - ISO date string inclusive lower bound (optional)
 * @param {string}  filters.endDate    - ISO date string inclusive upper bound (optional)
 *
 * @returns {{ responses: object[], total: number, page: number, pageSize: number }}
 */
async function getAllSurveyResponses({ page = 1, startDate, endDate } = {}) {
  const offset = (page - 1) * PAGE_SIZE;

  // Build the base query joining customer name from check_ins
  let query = supabase
    .from('survey_responses')
    .select(
      `id,
       check_in_id,
       star_rating,
       comment,
       created_at,
       check_ins ( first_name, last_name )`,
      { count: 'exact' }
    )
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (startDate) {
    query = query.gte('created_at', new Date(startDate).toISOString());
  }

  if (endDate) {
    // Extend endDate to end of that day
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    query = query.lte('created_at', end.toISOString());
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(`Failed to fetch survey responses: ${error.message}`);
  }

  const responses = (data || []).map(r => ({
    id:           r.id,
    checkInId:    r.check_in_id,
    starRating:   r.star_rating,
    comment:      r.comment || '',
    createdAt:    r.created_at,
    customerName: r.check_ins
      ? `${r.check_ins.first_name} ${r.check_ins.last_name}`
      : 'Unknown',
  }));

  return {
    responses,
    total:    count || 0,
    page,
    pageSize: PAGE_SIZE,
  };
}

module.exports = { saveSurveyResponse, getAllSurveyResponses };
