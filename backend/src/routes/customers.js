const { Router }       = require('express')
const { authenticate } = require('../middleware/auth')
const ctrl             = require('../controllers/customers.controller')

const router = Router()

router.get('/', authenticate, ctrl.list)

module.exports = router
