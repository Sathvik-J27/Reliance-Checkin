const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const checkInRoutes  = require('./src/routes/checkInRoutes');
const accountRoutes  = require('./src/routes/accountRoutes');
const materialRoutes = require('./src/routes/materialRoutes');
const imageRoutes    = require('./src/routes/imageRoutes');
const surveyRoutes   = require('./src/routes/surveyRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
app.set('trust proxy', 1);

// CORS: allow the frontend origin (dev: localhost:3000, prod: same-origin or FRONTEND_URL)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser — 15mb limit to accommodate base64-encoded signatures
app.use(express.json({ limit: '15mb' }));

// Rate limiting — 600 requests per minute per IP.
// Staff browsers share one office NAT IP and poll /api/check-ins every few seconds,
// so we need headroom: 10 staff × 20 polls/min + API calls = ~300+ req/min from one IP.
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 600,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, please slow down.' },
});
app.use('/api', apiLimiter);

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Office network detection — frontend calls this on load to decide whether to require geolocation.
// Returns true if the request IP matches one of the ALLOWED_IPS (i.e. office Wi-Fi NAT IP).
app.get('/api/on-office-network', (req, res) => {
  const allowedIps = (process.env.ALLOWED_IPS || '')
    .split(',').map(s => s.trim()).filter(Boolean);
  if (allowedIps.length === 0) return res.json({ onOfficeNetwork: false });
  const rawIp = req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.ip || req.socket.remoteAddress;
  const clientIp = (rawIp || '').replace(/^::ffff:/, '');
  const onOfficeNetwork = allowedIps.some(ip => ip.replace(/^::ffff:/, '') === clientIp);
  res.json({ onOfficeNetwork });
});

// API routes
app.use('/api', checkInRoutes);
app.use('/api', accountRoutes);
app.use('/api', materialRoutes);
app.use('/api', imageRoutes);
app.use('/api', surveyRoutes);

// Global error handler (must be before static files)
app.use(errorHandler);

// Serve React frontend in production (single-service deployment)
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../frontend/build');
  if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
    });
  } else {
    console.warn('Frontend build not found at', buildPath);
  }
}

module.exports = app;
