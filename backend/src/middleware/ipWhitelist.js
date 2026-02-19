const ALLOWED_IPS = (process.env.ALLOWED_IPS || '')
  .split(',')
  .map(ip => ip.trim())
  .filter(Boolean);

module.exports = function ipWhitelist(req, res, next) {
  // Skip restriction in development or if no IPs configured
  if (process.env.NODE_ENV !== 'production' || ALLOWED_IPS.length === 0) {
    return next();
  }
  // Always allow Railway health checks
  if (req.path === '/health') return next();

  const clientIp = req.ip || req.socket.remoteAddress;
  if (ALLOWED_IPS.includes(clientIp)) {
    return next();
  }
  res.status(403).send('Access restricted to office network.');
};
