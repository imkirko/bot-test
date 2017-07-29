const logger = require('../../util/logger');

module.exports = (err, req, res, next) => {
	logger.log(err.message)
	res.status(500)
}