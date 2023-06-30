import { H3Event } from 'h3'
import { stringify } from 'flatted'

export const createLogEntry = (event: H3Event) => {
  const {
    node: { req }
  } = event
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    clientIP: req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    error: null,
    stackTrace: null,
    responseTime: null,
    statusCode: 200,
    responseBody: null
  }

  logger.info(`Log entry created for request: ${logEntry.method} ${logEntry.url}`)

  return logEntry
}

// Middleware to log API call details
export default defineEventHandler(async (event) => {
  // stringify used because event is a circular object
  logger.info(
    `Starting logging middleware for event: ${stringify(event.node.req.headers['accept-language'])}`
  )

  const logEntry = createLogEntry(event)
  const fileName = 'server.json'

  try {
    // Initiate storage
    const storage = useStorage('logs')

    let newFile = []
    // Check if the file exists and is not empty before reading
    const hasItem = await storage.hasItem(fileName)
    if (hasItem) {
      logger.info(`Log file "${fileName}" exists. Reading data.`)
      const fileData = await storage.getItem(fileName)
      newFile = fileData
    } else {
      logger.info(`Log file "${fileName}" does not exist. Creating new file.`)
    }

    // Append log entry to JSON array
    newFile.push(logEntry)
    logger.info('Log entry added to file data.')

    // Save the updated log data
    await storage.setItem(fileName, JSON.stringify(newFile, null, 2))
    logger.info(
      `Successfully logged request data for ${logEntry.method} ${logEntry.url} at ${logEntry.timestamp}`
    )
  } catch (err: any) {
    // Update log entry with error details
    logEntry.error = err.message
    logEntry.stackTrace = err.stack

    // Print error details
    logger.error(
      `Error handling API call data: ${err.message}. Stack trace: ${logEntry.stackTrace}`
    )
  }
})
