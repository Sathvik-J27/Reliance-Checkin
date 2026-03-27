const crypto = require('crypto');
const supabase = require('../config/supabase');

const TOKEN_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

/**
 * Generates a 64-char hex auth token, persists it to the check_in row with a
 * 2-hour expiry, and returns the raw token string.
 */
async function generateAuthToken(checkInId) {
  const token     = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + TOKEN_TTL_MS).toISOString();

  const { error } = await supabase
    .from('check_ins')
    .update({ auth_token: token, auth_token_expires_at: expiresAt })
    .eq('id', checkInId);

  if (error) {
    throw new Error(`Failed to store auth token: ${error.message}`);
  }

  return token;
}

/**
 * Validates a bearer token.
 * Returns the matching check-in record (id, first_name, last_name, phones) or null
 * if the token does not exist or has expired.
 */
async function validateAuthToken(token) {
  if (!token) return null;

  const { data, error } = await supabase
    .from('check_ins')
    .select('id, first_name, last_name, phones, auth_token_expires_at')
    .eq('auth_token', token)
    .single();

  if (error || !data) return null;

  const expiresAt = new Date(data.auth_token_expires_at);
  if (Date.now() > expiresAt.getTime()) return null;

  return data;
}

/**
 * Looks up the most recent check-in that contains `phone` in its phones JSONB
 * array, issues a fresh auth token, and returns login data for the response.
 * Returns null if no matching check-in is found.
 */
async function authenticateByPhone(phone) {
  // Normalize to digits-only so we can match regardless of how the phone was stored
  const digitsOnly = phone.replace(/\D/g, '');

  // Try exact match first (fastest path — works when stored as digits-only)
  let { data } = await supabase
    .from('check_ins')
    .select('id, first_name, last_name')
    .contains('phones', [digitsOnly])
    .order('check_in_time', { ascending: false })
    .limit(1)
    .single();

  // Fallback: load recent check-ins and normalize each stored phone for comparison
  // (handles phones stored with formatting like "(555) 123-4567")
  if (!data) {
    const { data: candidates } = await supabase
      .from('check_ins')
      .select('id, first_name, last_name, phones, check_in_time')
      .order('check_in_time', { ascending: false })
      .limit(500);

    const match = (candidates || []).find(ci =>
      (ci.phones || []).some(p => p.replace(/\D/g, '') === digitsOnly)
    );
    data = match || null;
  }

  if (!data) return null;

  const token = await generateAuthToken(data.id);

  return {
    authToken:    token,
    checkInId:    data.id,
    customerName: `${data.first_name} ${data.last_name}`,
  };
}

/**
 * Persists a single uploaded image record to `customer_images`.
 */
async function saveImage(checkInId, imageUrl, storagePath, quantity, sortOrder) {
  const { data, error } = await supabase
    .from('customer_images')
    .insert({
      check_in_id:  checkInId,
      image_url:    imageUrl,
      storage_path: storagePath,
      quantity:     quantity  ?? 1,
      sort_order:   sortOrder ?? 0,
    })
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to save image record: ${error.message}`);
  }

  return data;
}

/**
 * Returns all images for a given check-in, ordered by sort_order ascending.
 */
async function getImagesByCheckInId(checkInId) {
  const { data, error } = await supabase
    .from('customer_images')
    .select('*')
    .eq('check_in_id', checkInId)
    .order('sort_order', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }

  return data || [];
}

/**
 * Returns all images across every check-in that includes `phone`, grouped by
 * check-in for the staff/revisit view.
 * Shape: [ { checkInId, checkInTime, images: [...] }, ... ]
 */
async function getImagesByPhone(phone) {
  // 1. Find all check-ins with this phone
  // Use .filter with 'cs' (contains) operator for JSONB columns — .contains() sends
  // PostgreSQL array syntax {x} which is invalid for JSONB; JSON.stringify gives ["x"].
  const { data: checkIns, error: ciError } = await supabase
    .from('check_ins')
    .select('id, first_name, last_name, check_in_time')
    .filter('phones', 'cs', JSON.stringify([phone]))
    .order('check_in_time', { ascending: false });

  if (ciError) {
    throw new Error(`Failed to look up check-ins by phone: ${ciError.message}`);
  }

  if (!checkIns || checkIns.length === 0) return [];

  const checkInIds = checkIns.map(c => c.id);

  // 2. Fetch all images for those check-ins in one query
  const { data: images, error: imgError } = await supabase
    .from('customer_images')
    .select('*')
    .in('check_in_id', checkInIds)
    .order('sort_order', { ascending: true });

  if (imgError) {
    throw new Error(`Failed to fetch images by phone: ${imgError.message}`);
  }

  // 3. Group images under their respective check-in
  const imageMap = {};
  for (const img of (images || [])) {
    if (!imageMap[img.check_in_id]) imageMap[img.check_in_id] = [];
    imageMap[img.check_in_id].push(img);
  }

  return checkIns.map(ci => ({
    checkInId:    ci.id,
    customerName: `${ci.first_name} ${ci.last_name}`,
    checkInTime:  ci.check_in_time,
    images:       imageMap[ci.id] || [],
  }));
}

/**
 * Updates the quantity for a single image row.
 */
async function updateImageQuantity(imageId, quantity) {
  const { data, error } = await supabase
    .from('customer_images')
    .update({ quantity })
    .eq('id', imageId)
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to update image quantity: ${error.message}`);
  }

  return data;
}

/**
 * Deletes an image record from the DB. The caller is responsible for also
 * calling deleteImageFromStorage (storageService) before or after.
 */
async function deleteImage(imageId) {
  const { error } = await supabase
    .from('customer_images')
    .delete()
    .eq('id', imageId);

  if (error) {
    throw new Error(`Failed to delete image record: ${error.message}`);
  }
}

/**
 * Convenience: fetch a single image record by ID (used to retrieve storagePath
 * before deletion).
 */
async function getImageById(imageId) {
  const { data, error } = await supabase
    .from('customer_images')
    .select('*')
    .eq('id', imageId)
    .single();

  if (error || !data) return null;
  return data;
}

module.exports = {
  generateAuthToken,
  validateAuthToken,
  authenticateByPhone,
  saveImage,
  getImagesByCheckInId,
  getImagesByPhone,
  updateImageQuantity,
  deleteImage,
  getImageById,
};
