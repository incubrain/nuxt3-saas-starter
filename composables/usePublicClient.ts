export default () => {
  const nuxtApp = useNuxtApp()
  const client = nuxtApp.$publicClient
  return client
}
