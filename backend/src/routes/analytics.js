const { Router }                     = require('express')
const { authenticate, requireOwner } = require('../middleware/auth')
const ctrl                           = require('../controllers/analytics.controller')

const router = Router()

router.get('/summary', authenticate, requireOwner, ctrl.summary)

module.exports = router
