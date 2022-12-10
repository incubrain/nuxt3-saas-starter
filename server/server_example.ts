export default async () => {
  const result = await $fetch('https://my.api.com/test', {
    headers: {
      Authorization: `Bearer ${useRuntimeConfig().apiSecret}`
    }
  })
  return result
}
