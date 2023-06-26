export default async ({ endpoint, options }: { endpoint: string, options: {} }) => {
  const { data, error } = await useAsyncData(
    async () =>
      await $fetch(endpoint, {
        ...options,
        onRequest({ request, options }) {
          // Log request
          console.log('[fetch request]', request, options)

          // Add `?t=1640125211170` to query search params
          options.query = options.query || {}
          options.query.t = new Date()
        }
      })
  )
  console.log('[fetch response]', data, error)
  return { data, error }
}
