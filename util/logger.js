const config = require('../config')
const _ = require('lodash')

var noop = function () {}
var consoleLog = config.logging ? console.log.bind(console) : noop

var logger = {
	log() {
		let args = _.toArray(arguments)
		.map((arg) => {
			if (typeof arg === 'object') {
				return JSON.stringify(arg, 2)
			} else {
				return arg
			}
		})

		consoleLog.apply(console, args)
	}
}

module.exports = logger