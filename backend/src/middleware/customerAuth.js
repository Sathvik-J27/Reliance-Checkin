const { validateAuthToken } = require('../services/imageService');

/**
 * Express middleware: Customer Bearer-token authentication.
 *
 * Extracts the token from the `Authorization: Bearer <token>` header,
 * validates it against the check_ins table (token match + expiry), and
 * attaches the matching check-in record to `req.customerCheckIn`.
 *
 * Returns 401 if the header is missing, malformed, or the token is
 * invalid/expired.
 */
module.exports = async function customerAuth(req, res, next) {
  const authHeader = req.headers['authorization'] || '';

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Missing or invalid Authorization header' });
  }

  const token = authHeader.slice(7).trim(); // strip "Bearer "

  if (!token) {
    return res.status(401).json({ success: false, error: 'Auth token is empty' });
  }

  try {
    const checkIn = await validateAuthToken(token);

    if (!checkIn) {
      return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    req.customerCheckIn = checkIn; // { id, first_name, last_name, phones, auth_token_expires_at }
    next();
  } catch (err) {
    next(err);
  }
};
