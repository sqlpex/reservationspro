const prisma = require('../lib/prisma')

async function list(_req, res, next) {
  try {
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(customers)
  } catch (err) { next(err) }
}

module.exports = { list }
