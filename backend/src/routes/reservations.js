const { Router }       = require('express')
const { authenticate } = require('../middleware/auth')
const ctrl             = require('../controllers/reservations.controller')

const router = Router()

router.get('/',       ctrl.list)
router.post('/',      authenticate, ctrl.create)
router.get('/:id',    ctrl.getOne)
router.patch('/:id',  authenticate, ctrl.update)
router.delete('/:id', authenticate, ctrl.remove)

module.exports = router
