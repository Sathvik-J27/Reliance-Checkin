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
 * Saves all selection data so it persists across refreshes.
 * Returns the updated record including customer contact info for email dispatch.
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
    .select('id, first_name, last_name, emails, check_in_time')
    .single();

  if (error) {
    throw new Error(`Failed to complete check-in: ${error.message}`);
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

/**
 * CQRS Query: Fetch all check-ins, mapped to camelCase for the frontend.
 * Returns waiting check-ins first (by check_in_time), then helped (by helped_time desc).
 */
async function getAllCheckIns() {
  const { data, error } = await supabase
    .from('check_ins')
    .select('*')
    .order('check_in_time', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch check-ins: ${error.message}`);
  }

  return (data || []).map(r => ({
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
    signature:            r.signature || '',
    checkInTime:          r.check_in_time,
    helpedTime:           r.helped_time || null,
    status:               r.status,
    currentlyHelpedBy:    r.currently_helped_by || null,
    partySize:            r.party_size || { adults: 1, minors: 0 },
    visitors:             r.visitors || [],
    waiverPdfUrl:         r.waiver_pdf_url || null,
    isRevisit:            r.is_revisit || false,
    // Staff selection data
    selectionSheetNumber: r.selection_sheet_number || null,
    materials:            r.materials || [],
    fabricator:           r.fabricator || null,
    helpedBy:             r.helped_by || r.currently_helped_by || null,
    draftStep:            r.draft_step || 0,
  }));
}

/**
 * CQRS Command: Mark a check-in as done (Staff2 queue management).
 * Simple status update — no selection data required.
 */
async function markAsDone(id) {
  const { error } = await supabase
    .from('check_ins')
    .update({
      status:      'done',
      helped_time: new Date().toISOString(),
    })
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to mark check-in as done: ${error.message}`);
  }
}

module.exports = { insertCheckIn, updateWaiverPdfUrl, completeCheckIn, saveDraft, getAllCheckIns, markAsDone };
