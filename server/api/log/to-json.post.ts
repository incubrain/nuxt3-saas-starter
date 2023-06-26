// import * as fs from 'fs'
// import * as path from 'path'

// // Function to log API call details
// export default defineEventHandler(async (event) => {
//   const { fileName, data } = await readBody(event)
//   console.log('logToJson', fileName, data)

//   const logEntry = createLogEntry(event)
//   try {
//     const filePath = `./logs/tests/${fileName}`

//     // Declare the log entry here and update it later as necessary
//     console.log('logEntry', logEntry)
//     logger.error(`Base Log Entry: ${logEntry}`)

//     // Ensure the directory exists
//     await fs.promises.mkdir(path.dirname(filePath), { recursive: true })

//     let json = []
//     // Check if the file exists and is not empty before reading
//     if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
//       const fileData = await fs.promises.readFile(filePath, 'utf-8')
//       json = JSON.parse(fileData)
//     }

//     logEntry.responseTime = data.duration
//     logEntry.statusCode = 200 // You'll need to replace this with the actual status code
//     logEntry.responseBody = {} // You'll need to replace this with the actual response body
//     json.push(logEntry)

//     await fs.promises.writeFile(filePath, JSON.stringify(json, null, 2))

//     logger.info(logEntry)
//   } catch (err: any) {
//     logger.error(`Error handling API call data: ${err.message}`)

//     logEntry.responseTime = data.duration
//     logEntry.statusCode = 500 // You'll need to replace this with the actual status code
//     logEntry.error = err.message
//     logEntry.stackTrace = err.stack

//     logger.error(logEntry)
//   }
// })
