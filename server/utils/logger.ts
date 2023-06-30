import * as path from 'path'
import * as winston from 'winston'

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}

const logColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'white'
}

winston.addColors(logColors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
)

// Creating a logger instance
const logger = winston.createLogger({
  levels: logLevels,
  format
})

// write logs to file in development
const logDir = './data/logs'
if (process.env.NODE_ENV === 'development') {
  logger.add(
    new winston.transports.File({
      filename: path.resolve(logDir, `${process.env.NODE_ENV}-error.log`),
      level: 'error'
    })
  )
  logger.add(
    new winston.transports.File({
      filename: path.resolve(logDir, `${process.env.NODE_ENV}-combined.log`)
    })
  )
  logger.add(new winston.transports.Console())
}

// only write errors to console in production
if (process.env.NODE_ENV === 'production') {
  logger.add(new winston.transports.Console({ format: winston.format.simple(), level: 'error' }))
}

export default logger
