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
const logDir = './public/logs'
const logger = winston.createLogger({
  levels: logLevels,
  format
})

// write logs to file in development
if (process.env.LOG_ENV === 'development') {
  logger.add(
    new winston.transports.File({
      filename: path.resolve(logDir, `${process.env.NODE_ENV}-error.log`),
      level: 'error'
    })
  )
  logger.add(
    new winston.transports.File({
      filename: path.resolve(logDir, `${process.env.NODE_ENV}-warn.log`),
      level: 'warn'
    })
  )
  logger.add(
    new winston.transports.File({
      filename: path.resolve(logDir, `${process.env.NODE_ENV}-combined.log`)
    })
  )
  logger.add(new winston.transports.Console())
}

// Vercel only accepts stdout and stderr, this logging will be viewable on the Vercel dashboard/logs
if (process.env.LOG_ENV === 'deployed') {
  logger.add(new winston.transports.Console())
}

// global handlers to catch unhandled exceptions, promise rejections and warnings occurring anywhere in the same Node.js process.
process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception', error)
})

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled promise rejection', reason)
})

process.on('warning', (warning) => {
  logger.warn(`Warning | name: ${warning.name}, message: ${warning.message}, stack: ${warning.stack}`)
})

export default logger
