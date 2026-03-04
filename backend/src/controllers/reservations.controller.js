const prisma = require('../lib/prisma')

async function list(_req, res, next) {
  try {
    const reservations = await prisma.reservation.findMany({
      include: { customer: true, venue: true, table: true },
      orderBy: { date: 'asc' },
    })
    res.json(reservations)
  } catch (err) { next(err) }
}

async function getOne(req, res, next) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: req.params.id },
      include: { customer: true, venue: true, table: true },
    })
    if (!reservation) return res.status(404).json({ message: 'Not found' })
    res.json(reservation)
  } catch (err) { next(err) }
}

async function create(req, res, next) {
  try {
    // TODO: availability check + table assignment + email notification
    const reservation = await prisma.reservation.create({ data: req.body })
    res.status(201).json(reservation)
  } catch (err) { next(err) }
}

async function update(req, res, next) {
  try {
    const reservation = await prisma.reservation.update({
      where: { id: req.params.id },
      data: req.body,
    })
    res.json(reservation)
  } catch (err) { next(err) }
}

async function remove(req, res, next) {
  try {
    await prisma.reservation.delete({ where: { id: req.params.id } })
    res.status(204).end()
  } catch (err) { next(err) }
}

module.exports = { list, getOne, create, update, remove }
