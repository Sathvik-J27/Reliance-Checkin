const ALLOWED_IPS = (process.env.ALLOWED_IPS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const OFFICE_LAT = parseFloat(process.env.OFFICE_LAT || '0');
const OFFICE_LNG = parseFloat(process.env.OFFICE_LNG || '0');
const OFFICE_RADIUS_M = parseFloat(process.env.OFFICE_RADIUS_METERS || '300');

function normalizeIp(ip) {
  return (ip || '').replace(/^::ffff:/, '');
}

function haversineMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

module.exports = function locationGuard(req, res, next) {
  // Disabled in development or if neither IP list nor office coordinates are configured
  if (process.env.NODE_ENV !== 'production' || (ALLOWED_IPS.length === 0 && !OFFICE_LAT)) {
    return next();
  }

  // 1. IP whitelist check
  const rawIp = req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.ip || req.socket.remoteAddress;
  const clientIp = normalizeIp(rawIp);

  if (ALLOWED_IPS.some(allowed => normalizeIp(allowed) === clientIp)) {
    return next();
  }

  // 2. Geolocation check — coordinates sent in request body
  const lat = parseFloat(req.body.lat);
  const lng = parseFloat(req.body.lng);

  if (!isNaN(lat) && !isNaN(lng) && OFFICE_LAT && OFFICE_LNG) {
    const distance = haversineMeters(lat, lng, OFFICE_LAT, OFFICE_LNG);
    if (distance <= OFFICE_RADIUS_M) {
      return next();
    }
    console.warn(`[LocationGuard] GPS rejected: distance=${Math.round(distance)}m from office (limit=${OFFICE_RADIUS_M}m)`);
  }

  console.warn(`[LocationGuard] Blocked: ip="${clientIp}" lat=${lat} lng=${lng}`);
  res.status(403).json({
    success: false,
    error: 'Check-in is only available at the Reliance office.',
    code: 'LOCATION_RESTRICTED',
  });
};
