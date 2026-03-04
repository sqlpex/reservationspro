const { PrismaClient } = require('@prisma/client')
const { PrismaPg }     = require('@prisma/adapter-pg')

function createClient() {
  const adapter = new PrismaPg(process.env.DATABASE_URL)
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

const prisma = global.prisma ?? createClient()
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

module.exports = prisma
