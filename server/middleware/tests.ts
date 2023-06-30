export default defineEventHandler((event) => {
  const { req, res } = event.node
  event.context.logEntry = createLogEntry(event)
  const startTime = Date.now()
  logger.info(`event start: ${req.url}`)
  res.on('finish', () => {
    const endTime = Date.now()
    logger.info(`Request finished: ${endTime - startTime}ms`)
  })
})
