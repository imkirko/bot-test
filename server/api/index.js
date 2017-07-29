const router = require('express').Router()

router.use('/discord', require('./discord/routes'))

module.exports = router