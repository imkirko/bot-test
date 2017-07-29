const _ = require('lodash')

var config = {
	env: process.env.NODE_ENV || 'development',
	logging: true,
	paths: {
		discordAuth: ''
	},
	server: {
		ip: process.env.IP || '0.0.0.0',
		port: process.env.PORT || 8080
	},
	mongo: {
	},
	discord: {
		token: process.env.BOT_TOKEN,
		clientID: process.env.BOT_CLIENT_ID,
		clientSecret: process.env.BOT_CLIENT_SECRET,
		prefix: '>>',
		games: [
			'Type >>help',
			'Created by Kirko'
		]
	}
}

module.exports = _.merge(config, require(`./${config.env}`))

