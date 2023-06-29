export default defineEventHandler(async (event) => {
  // get the query parameters
  const fileName = getRequestURL(event).searchParams.get('fileName')
  if (!fileName) return { status: 500, body: 'No fileName provided' }

  // Use Nitro's storage layer
  const storage = useStorage('data')

  try {
    logger.info(`Attempting to read file: ${fileName}`)

    // Check if item exists
    const hasItem = await storage.hasItem(fileName)

    if (!hasItem) {
      throw new Error(`File ${fileName} not found in storage`)
    }

    // Get file data
    const fileData = await storage.getItem(fileName)
    logger.info(`Successfully read data from: ${fileName}`)

    return { status: 200, body: fileData }
  } catch (err: any) {
    logger.error(`Error reading file: ${err.message}`)
    return { status: 500, body: err.message }
  }
})
