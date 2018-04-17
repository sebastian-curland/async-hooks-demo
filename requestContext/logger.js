'use strict'

const winston = require('winston')
const expressWinston = require('express-winston')
const ah = require('./asynchooks')

/**
 * @description creates a customizable Console winston transport
 * @param {object} options allows to override defaults for the transport
 * @returns {winston.Logger}
 */
function createWinstonLogger (options = {}) {
  const logger = new winston.Logger({
    transports: [
      new (winston.transports.Console)({
        colorize: true,
        timestamp: true
      })
    ]
  })

  // Add request context data to log message
  logger.rewriters.push(function (level, msg, meta) {
    const requestContext = ah.getRequestContext()
    meta.requestId = `(${requestContext.requestId})`
    return meta
  })

  return logger
}

exports.loggerFactory = createWinstonLogger