const prisma = require('../lib/prisma')

async function list(_req, res, next) {
  try {
    const venues = await prisma.venue.findMany({ orderBy: { name: 'asc' } })
    res.json(venues)
  } catch (err) { next(err) }
}

async function create(req, res, next) {
  try {
    const venue = await prisma.venue.create({ data: req.body })
    res.status(201).json(venue)
  } catch (err) { next(err) }
}

module.exports = { list, create }
