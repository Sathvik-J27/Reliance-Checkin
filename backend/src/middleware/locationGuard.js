const ALLOWED_IPS = (process.env.ALLOWED_IPS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

function normalizeIp(ip) {
  return (ip || '').replace(/^::ffff:/, '');
}

// Allows requests only from the office Wi-Fi (matched by public IP via ALLOWED_IPS env var).
// GPS/geolocation is no longer used — access is gated purely by network.
module.exports = function locationGuard(req, res, next) {
  // If no IPs are configured, allow everything (dev / unconfigured environment)
  if (ALLOWED_IPS.length === 0) {
    return next();
  }

  const rawIp = req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.ip || req.socket.remoteAddress;
  const clientIp = normalizeIp(rawIp);

  if (ALLOWED_IPS.some(allowed => normalizeIp(allowed) === clientIp)) {
    return next();
  }

  console.warn(`[LocationGuard] Blocked: ip="${clientIp}" not in office whitelist`);
  res.status(403).json({
    success: false,
    error: 'Check-in is only available on the office network.',
    code: 'NETWORK_RESTRICTED',
  });
};
