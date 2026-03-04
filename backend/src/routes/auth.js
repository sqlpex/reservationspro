const { Router }       = require('express')
const { authenticate } = require('../middleware/auth')
const ctrl             = require('../controllers/auth.controller')

const router = Router()

router.post('/login', ctrl.login)
router.get('/me',     authenticate, ctrl.getMe)

module.exports = router
