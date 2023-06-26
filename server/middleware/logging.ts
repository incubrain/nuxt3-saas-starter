import * as fs from 'fs'
import * as path from 'path'
import { H3Event } from 'h3'

const createLogEntry = (event: H3Event) => {
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
    stackTrace: null
  }
  return logEntry
}

// Middleware to log API call details
export default defineEventHandler(async (event) => {
  const logEntry = createLogEntry(event)
  const filePath = './logs/server.json'

  try {
    // Ensure the directory exists
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true })

    let json = []
    // Check if the file exists and is not empty before reading
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      const fileData = await fs.promises.readFile(filePath, 'utf-8')
      json = JSON.parse(fileData)
    }

    // Append log entry to JSON array
    json.push(logEntry)

    // Save the updated log data
    await fs.promises.writeFile(filePath, JSON.stringify(json, null, 2))
    logger.info(`Succesfully logged: ${logEntry.timestamp}`)
  } catch (err: any) {
    // Update log entry with error details
    logEntry.error = err.message
    logEntry.stackTrace = err.stack

    // Print error details
    logger.error(`Error handling API call data: ${err.message}`)
    console.error(logEntry)
  }
})
