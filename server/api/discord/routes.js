const router = require('express').Router()
const controller = require('./controller')

router.params('id', controller.params)

router.route('/')
.get(controller.get)

module.exports = router