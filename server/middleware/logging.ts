import { H3Event } from 'h3'
import { Storage, StorageValue } from 'unstorage'
import { z } from 'zod'

const KV_BATCH_SIZE = process.env.LOG_ENV === 'development' ? 1 : 20
const fileName = process.env.LOG_ENV === 'development' ? 'server.json' : 'log-batch'
const DB_BATCH_SIZE = 500

const logObject = z.object({
  timestamp: z.string(),
  method: z.string(),
  path: z.string(),
  params: z.object({}),
  sessions: z.object({}),
  url: z.string(),
  clientIP: z.string(),
  userAgent: z.string(),
  referer: z.string(),
  origin: z.string(),
  error: z.string().nullable(),
  stackTrace: z.string().optional(),
  responseTime: z.number().nullable(),
  statusCode: z.number(),
  startTime: z.number()
})

type LogType = z.infer<typeof logObject>

export const createLogEntry = (event: H3Event) => {
  const {
    node: { req, res },
    path,
    context: { sessions, params }
  } = event
  const startTime = Date.now()

  return {
    timestamp: new Date().toISOString(),
    method: req.method,
    path,
    params,
    sessions,
    clientIP: req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    referer: req.headers.referer,
    origin: req.headers.origin,
    error: null as string | null,
    stackTrace: undefined as string | undefined,
    responseTime: null as number | null,
    statusCode: res.statusCode,
    startTime
  } as LogType
}

const sendLogsToDb = (logs: any[]) => {
  try {
    logger.info(`Sending ${logs.length} logs to DB`)
    // const db = useDatabase()
    // const collection = db.collection('logs')
    // await collection.insertMany(logs)
  } catch (err: any) {
    logger.error(`Error sending logs to DB: ${err.message}`)
  }
}

const storeInKv = async ({
  fileName,
  storage,
  data
}: {
  fileName: string
  storage: Storage<StorageValue>
  data: any[]
}) => {
  try {
    await storage.setItem(fileName, JSON.stringify(data, null, 2))
  } catch (err: any) {
    logger.error(`Error storing logs in KV: ${err.message}`)
  }
}

const storeBatchedLogs = async (fileName: string, logs: any[]) => {
  try {
    logger.info(`storing ${logs.length} batched logs`)
    const storage = useStorage('logs')
    let length = logs.length

    if (await storage.hasItem(fileName)) {
      logger.info('get old logs from kv')
      const oldLogs = (await storage.getItem<LogType[]>(fileName)) || []
      logs = [...oldLogs, ...logs]
      length = logs.length
    }

    if (length >= DB_BATCH_SIZE) {
      logger.info('storing logs in db')
      sendLogsToDb(logs)
      // await storage.removeItem(fileName)
    } else {
      logger.info('store logs in kv')
      await storeInKv({ fileName, storage, data: logs })
    }
  } catch (err: any) {
    logger.error(`Error sending logs batch: ${err.message}`)
  }
}

let batchedLogs: LogType[] = []
export default defineEventHandler((event) => {
  const { req, res } = event.node
  logger.info(`create log: ${process.env.LOG_ENV}, ${KV_BATCH_SIZE}`)
  const logEntry = createLogEntry(event)
  const startTime = logEntry.startTime

  // Handle errors
  req.on('error', (err) => {
    logEntry.error = err.message
    logEntry.stackTrace = err.stack
  })

  // Handle response
  res.on('finish', async () => {
    const endTime = Date.now()
    const responseTime = endTime - startTime
    logger.info(`Request finished: ${responseTime}ms`)
    // Update logEntry with the responseTime
    logEntry.responseTime = responseTime
    batchedLogs.push(logEntry)
    if (batchedLogs.length >= KV_BATCH_SIZE) {
      await storeBatchedLogs(fileName, batchedLogs)
      batchedLogs = []
    }
  })
})
