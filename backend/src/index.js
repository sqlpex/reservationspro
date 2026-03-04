require('dotenv').config()

const express = require('express')
const cors    = require('cors')
const morgan  = require('morgan')

const authRoutes        = require('./routes/auth')
const reservationRoutes = require('./routes/reservations')
const venueRoutes       = require('./routes/venues')
const customerRoutes    = require('./routes/customers')
const analyticsRoutes   = require('./routes/analytics')

const app  = express()
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth',         authRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/venues',       venueRoutes)
app.use('/api/customers',    customerRoutes)
app.use('/api/analytics',    analyticsRoutes)

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`[server] ReservationsPro API running on http://localhost:${PORT}`)
})
