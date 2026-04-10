const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensor.routes');
const controlRoutes = require('./routes/control.routes');
const authRoutes   = require('./routes/auth.routes');
const userRoutes   = require('./routes/user.routes');
const weatherRoutes = require('./routes/weather.routes');
const cropsRoutes = require('./routes/crops.routes');
const healthRoutes = require('./routes/health.routes');
const pesticidesRoutes = require('./routes/pesticides.routes');
const insuranceRoutes = require('./routes/insurance.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Connect MongoDB ───────────────────────────────────────────────────────────
connectDB();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
}));
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api', sensorRoutes);
app.use('/api', controlRoutes);
app.use('/api', weatherRoutes);
app.use('/api/crops', cropsRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/insurance', insuranceRoutes);
app.use('/api/pesticides', pesticidesRoutes);

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ status: 'Krishi backend running', version: '1.0.0' });
});

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[Error]', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
