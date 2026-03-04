const prisma = require('../lib/prisma')

async function summary(_req, res, next) {
  try {
    // TODO: detailed aggregations for occupancy, peak hours, cancellation rates
    const [totalReservations, totalCustomers, totalVenues] = await Promise.all([
      prisma.reservation.count(),
      prisma.customer.count(),
      prisma.venue.count(),
    ])
    res.json({ totalReservations, totalCustomers, totalVenues })
  } catch (err) { next(err) }
}

module.exports = { summary }
