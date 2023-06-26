import * as fs from 'fs'

// Function to return file content
export default defineEventHandler(async (event) => {
  // get the query parameters
  const fileName = getRequestURL(event).searchParams.get('fileName')
  console.log('getJson', fileName)

  try {
    logger.info(`Attempting to read file: ./logs/tests/${fileName}`)

    const fileData = await fs.promises.readFile(`./logs/tests/${fileName}`, 'utf-8')

    logger.info(`Data: ${fileData}`)
    logger.info(`Parsing JSON data from file: ./logs/tests/${fileName}`)
    const jsonData = JSON.parse(fileData)

    logger.info(`Successfully read data from ./logs/tests/${fileName}`)

    return { status: 200, body: jsonData }
  } catch (err: any) {
    logger.error(`Error reading file: ${err.message}`)
    return { status: 500, body: err.message }
  }
})
