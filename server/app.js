const express = require('express')
const app = express()

// App middleware
require('./middleware/appMiddleware')(app)

// Routes
app.use('/api', require('./api'));

// Error handling
app.use(require('./middleware/errorHandling'));

module.exports = app