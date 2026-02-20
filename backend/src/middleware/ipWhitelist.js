const ALLOWED_IPS = (process.env.ALLOWED_IPS || '')
  .split(',')
  .map(ip => ip.trim())
  .filter(Boolean);

// Strip IPv6-mapped IPv4 prefix (::ffff:1.2.3.4 → 1.2.3.4)
function normalizeIp(ip) {
  if (!ip) return '';
  return ip.replace(/^::ffff:/, '');
}

module.exports = function ipWhitelist(req, res, next) {
  // Skip restriction in development or if no IPs configured
  if (process.env.NODE_ENV !== 'production' || ALLOWED_IPS.length === 0) {
    return next();
  }
  // Always allow Railway health checks
  if (req.path === '/health') return next();

  const rawIp = req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.ip || req.socket.remoteAddress;
  const clientIp = normalizeIp(rawIp);

  if (ALLOWED_IPS.some(allowed => normalizeIp(allowed) === clientIp)) {
    return next();
  }

  console.warn(`IP blocked: raw="${rawIp}" normalized="${clientIp}" allowed=${JSON.stringify(ALLOWED_IPS)}`);
  res.status(403).send('Access restricted to office network.');
};
