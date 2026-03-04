const { Router }                     = require('express')
const { authenticate, requireOwner } = require('../middleware/auth')
const ctrl                           = require('../controllers/venues.controller')

const router = Router()

router.get('/',  ctrl.list)
router.post('/', authenticate, requireOwner, ctrl.create)

module.exports = router
