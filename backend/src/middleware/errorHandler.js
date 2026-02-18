/**
 * Global Express error handler.
 * Returns structured JSON errors instead of HTML stack traces.
 */
function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  console.error('[API Error]', err.message);

  res.status(status).json({
    success: false,
    error: status === 500 ? 'Internal server error' : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
}

module.exports = errorHandler;
