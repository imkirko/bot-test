const http = require('http')
const app = require('./server/app')
const logger = require('./util/logger')

http.createServer(app).listen(app.get('port'), () => {
	logger.log(`Server now running on port ${app.get('port')}`)
})