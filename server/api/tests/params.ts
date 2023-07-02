export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  const body = await readBody(event)
  return { status: 200, body, params }
})
