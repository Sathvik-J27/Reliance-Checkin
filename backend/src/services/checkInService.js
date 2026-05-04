const supabase = require('../config/supabase');

/**
 * CQRS Command: Insert a new check-in record.
 * Returns the created record (id, check_in_time, status).
 */
async function insertCheckIn(data) {
  // Duplicate phone/email check — skip for revisits (customer already exists)
  if (!data.isRevisit) {
    const primaryPhone = data.phones?.[0];
    if (primaryPhone) {
      const { data: phoneMatch } = await supabase
        .from('check_ins')
        .select('id')
        .contains('phones', [primaryPhone])
        .limit(1);
      if (phoneMatch?.length) {
        const err = new Error('A customer with this phone number already exists. Please use the Revisit option instead.');
        err.status = 409;
        throw err;
      }
    }

    const primaryEmail = data.emails?.[0];
    if (primaryEmail) {
      const { data: emailMatch } = await supabase
        .from('check_ins')
        .select('id')
        .contains('emails', [primaryEmail])
        .limit(1);
      if (emailMatch?.length) {
        const err = new Error('A customer with this email address already exists. Please use the Revisit option instead.');
        err.status = 409;
        throw err;
      }
    }
  }

  const { data: record, error } = await supabase
    .from('check_ins')
    .insert({
      first_name:       data.firstName,
      last_name:        data.lastName,
      street:           data.street,
      suite_unit:       data.suiteUnit || null,
      city:             data.city,
      state:            data.state,
      zip:              data.zip,
      country:          data.country,
      phones:           data.phones,
      emails:           data.emails,
      referral_sources: data.referralSources,
      signature:        data.signature,
      party_size:       data.partySize,
      visitors:         data.visitors,
      check_in_time:    data.checkInTime || new Date().toISOString(),
      status:           'waiting',
      is_revisit:       data.isRevisit || false,
      // ESIGN Act compliance fields
      esign_consent_timestamp: data.esignConsentTimestamp || null,
      ip_address:       data.ipAddress || null,
      session_id:       data.sessionId || null,
      device_info:      data.deviceInfo || null,
    })
    .select('id, check_in_time, status')
    .single();

  if (error) {
    throw new Error(`Database insert failed: ${error.message}`);
  }

  return record;
}

/**
 * CQRS Command: Update waiver_pdf_url after PDF is uploaded.
 */
async function updateWaiverPdfUrl(id, pdfUrl) {
  const { error } = await supabase
    .from('check_ins')
    .update({ waiver_pdf_url: pdfUrl })
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to update waiver PDF URL: ${error.message}`);
  }
}

/**
 * CQRS Command: Mark check-in as helped (staff submission).
 * Idempotent: uses .neq('status', 'helped') so only one concurrent request wins.
 * If another staff member already completed it, throws a 409.
 */
async function completeCheckIn(id, { helpedBy, selectionSheetNumber, materials, fabricator }) {
  const { data: record, error } = await supabase
    .from('check_ins')
    .update({
      status:                  'helped',
      helped_time:             new Date().toISOString(),
      currently_helped_by:     helpedBy,
      helped_by:               helpedBy,
      selection_sheet_number:  selectionSheetNumber,
      materials:               materials || [],
      fabricator:              fabricator || null,
      draft_step:              3,
    })
    .eq('id', id)
    .neq('status', 'helped')          // atomic guard — only wins if not already helped
    .select('id, first_name, last_name, emails, check_in_time')
    .maybeSingle();                    // returns null (not error) when 0 rows updated

  if (error) {
    throw new Error(`Failed to complete check-in: ${error.message}`);
  }

  if (!record) {
    // 0 rows updated → another staff member already completed this check-in
    const err = new Error('This check-in was already completed by another staff member.');
    err.status = 409;
    throw err;
  }

  return record;
}

/**
 * CQRS Command: Atomically claim a waiting check-in for a staff member.
 * Only succeeds if currently_helped_by is null — first staff to call this wins.
 * Returns the record on success, or null if already claimed by someone else.
 */
async function claimCheckIn(id, helpedBy) {
  const updateData = helpedBy
    ? { currently_helped_by: helpedBy }
    : { currently_helped_by: null };

  const { data: record, error } = await supabase
    .from('check_ins')
    .update(updateData)
    .eq('id', id)
    .eq('status', 'waiting')
    .select('id, currently_helped_by')
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to claim check-in: ${error.message}`);
  }

  return record;
}

/**
 * CQRS Command: Save in-progress draft data for a waiting check-in.
 * Called when staff closes the popup without submitting.
 */
async function saveDraft(id, { draftStep, materials, fabricator, helpedBy, selectionSheetNumber }) {
  const { error } = await supabase
    .from('check_ins')
    .update({
      draft_step:              draftStep || 0,
      materials:               materials || [],
      fabricator:              fabricator || null,
      currently_helped_by:     helpedBy || null,
      helped_by:               helpedBy || null,
      selection_sheet_number:  selectionSheetNumber || null,
    })
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to save draft: ${error.message}`);
  }
}

const LIST_COLUMNS = [
  'id', 'first_name', 'last_name', 'street', 'suite_unit', 'city', 'state', 'zip', 'country',
  'phones', 'emails', 'referral_sources', 'check_in_time', 'helped_time', 'status',
  'currently_helped_by', 'party_size', 'visitors', 'waiver_pdf_url', 'is_revisit',
  'selection_sheet_number', 'materials', 'fabricator', 'helped_by', 'draft_step',
].join(', ');

function mapRow(r) {
  return {
    id:                   r.id,
    firstName:            r.first_name,
    lastName:             r.last_name,
    street:               r.street,
    suiteUnit:            r.suite_unit || '',
    city:                 r.city,
    state:                r.state,
    zip:                  r.zip,
    country:              r.country,
    phones:               r.phones || [],
    emails:               r.emails || [],
    referralSources:      r.referral_sources || [],
    checkInTime:          r.check_in_time,
    helpedTime:           r.helped_time || null,
    status:               r.status,
    currentlyHelpedBy:    r.currently_helped_by || null,
    partySize:            r.party_size || { adults: 1, minors: 0 },
    // Strip signature from each visitor — fetched separately via getCheckInById when needed
    visitors:             (r.visitors || []).map(({ signature: _sig, ...v }) => v),
    waiverPdfUrl:         r.waiver_pdf_url || null,
    isRevisit:            r.is_revisit || false,
    selectionSheetNumber: r.selection_sheet_number || null,
    materials:            r.materials || [],
    fabricator:           r.fabricator || null,
    helpedBy:             r.helped_by || r.currently_helped_by || null,
    draftStep:            r.draft_step || 0,
  };
}

/**
 * CQRS Query: Fetch check-ins without signature data (for SSE broadcasts and list views).
 *
 * - No date param: returns last 2 days of check-ins (covers queue + today's/yesterday's history).
 * - date='YYYY-MM-DD': returns records where helped_time falls on that date (for History tab).
 *
 * Signatures are stripped here to reduce egress bandwidth; use getCheckInById() when needed.
 */
async function getAllCheckIns({ date } = {}) {
  let query = supabase.from('check_ins').select(LIST_COLUMNS);

  if (date) {
    // Build day boundaries in America/New_York (handles EDT/EST automatically).
    // helped_time is stored as UTC, so we must compare against UTC equivalents of
    // Eastern midnight and Eastern end-of-day for the selected date.
    const probe = new Date(`${date}T12:00:00Z`);
    const tzParts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      timeZoneName: 'longOffset',
    }).formatToParts(probe);
    const etOffset = (tzParts.find(p => p.type === 'timeZoneName')?.value ?? 'GMT-05:00').replace('GMT', '');
    const dayStart = new Date(`${date}T00:00:00${etOffset}`);
    const dayEnd   = new Date(`${date}T23:59:59.999${etOffset}`);
    query = query
      .gte('helped_time', dayStart.toISOString())
      .lt('helped_time',  dayEnd.toISOString())
      .order('helped_time', { ascending: false });
  } else {
    // Default window: yesterday 00:00 through now — covers queue + today's/yesterday's history
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 1);
    cutoff.setHours(0, 0, 0, 0);
    query = query
      .gte('check_in_time', cutoff.toISOString())
      .order('check_in_time', { ascending: false });
  }

  const { data, error } = await query;
  if (error) throw new Error(`Failed to fetch check-ins: ${error.message}`);
  return (data || []).map(mapRow);
}

/**
 * CQRS Query: Fetch a single check-in with full data including visitor signatures.
 * Used by the View popup so signatures are loaded on-demand rather than in every broadcast.
 */
async function getCheckInById(id) {
  const { data, error } = await supabase
    .from('check_ins')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(`Failed to fetch check-in: ${error.message}`);

  return {
    ...mapRow(data),
    signature: data.signature || '',
    visitors:  data.visitors  || [],   // full visitors including signatures
  };
}

/**
 * CQRS Command: Mark a check-in as done (Staff2 queue management).
 * Simple status update — no selection data required.
 */
async function markAsDone(id, helpedBy) {
  const updateData = {
    status:      'done',
    helped_time: new Date().toISOString(),
    currently_helped_by: null,
  };
  if (helpedBy) updateData.helped_by = helpedBy;

  const { error } = await supabase
    .from('check_ins')
    .update(updateData)
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to mark check-in as done: ${error.message}`);
  }
}

module.exports = { insertCheckIn, updateWaiverPdfUrl, completeCheckIn, claimCheckIn, saveDraft, getAllCheckIns, getCheckInById, markAsDone };
