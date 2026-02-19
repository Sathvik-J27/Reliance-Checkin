const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const checkInRoutes  = require('./src/routes/checkInRoutes');
const accountRoutes  = require('./src/routes/accountRoutes');
const materialRoutes = require('./src/routes/materialRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// CORS: allow the frontend origin (dev: localhost:3000, prod: same-origin or FRONTEND_URL)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser — 15mb limit to accommodate base64-encoded signatures
app.use(express.json({ limit: '15mb' }));

// Rate limiting — 60 requests per minute per IP
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, please slow down.' },
});
app.use('/api', apiLimiter);

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// API routes
app.use('/api', checkInRoutes);
app.use('/api', accountRoutes);
app.use('/api', materialRoutes);

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
