import { createLogEntry } from '../../middleware/logging'
// Function to log API call details
export default defineEventHandler(async (event) => {
  logger.info('to-storage endpoint')
  const { fileName, data } = await readBody(event)
  if (!fileName) return { status: 500, body: 'No fileName provided' }
  if (!data) return { status: 500, body: 'No data provided' }

  logger.info(`logToJson ${fileName}`)

  const logEntry = createLogEntry(event)
  try {
    // Declare the log entry here and update it later as necessary

    // Initiate storage
    const storage = useStorage('data')
    let newFile = []

    // Check if the file exists and is not empty before reading
    const hasItem = await storage.hasItem(fileName)
    if (hasItem) {
      const fileData = await storage.getItem(fileName)
      logger.info(`old data: ${fileData}`)
      newFile = fileData
    }

    logEntry.responseTime = data.duration
    logEntry.statusCode = 200 // You'll need to replace this with the actual status code
    newFile.push(logEntry)
    logger.info('pushed data')

    await storage.setItem(fileName, JSON.stringify(newFile, null, 2))
    logger.info('stored data')
    return { status: 200, body: 'data stored' }
  } catch (err: any) {
    logger.error(`Error handling API call data: ${err}`)

    logEntry.responseTime = data.duration
    logEntry.statusCode = 500 // You'll need to replace this with the actual status code
    logEntry.error = err.message
    logEntry.stackTrace = err.stack

    logger.error(logEntry)
    return { status: 500, body: 'error storing data' }
  }
})
