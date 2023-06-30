export default defineEventHandler((event) => {
  const { req, res } = event.node
  const startTime = Date.now()
  logger.info(`event start: ${req.url}`)
  res.on('finish', () => {
    const endTime = Date.now()
    logger.info(`Request finished: ${endTime - startTime}ms`)
  })
})
