const path = require('path')
const {server} = require('../../config')

module.exports = (app) => {
	app.set('env', process.env)
	app.set('view engine', 'ejs')
	app.set('port', server.port)
}
