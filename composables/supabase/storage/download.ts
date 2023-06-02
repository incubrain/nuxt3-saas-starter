const publicBucket = 'public-media'
const privateBucket = 'private-media'

const folder = async (userId: string, isPublic: boolean) => {
  const folder = isPublic ? publicBucket : privateBucket
  const client = useSupabase()

  const { data, error } = await client.storage.from(`${folder}`).list(`${userId}/`, {
    limit: 100,
    offset: 0
  })

  return {
    data,
    error
  }
}
const avatar = async (userId: string, isPublic: boolean) => {
  const folder = isPublic ? publicBucket : privateBucket
  const client = useSupabase()

  const { data, error } = await client.storage.from(`${folder}`).download(`${userId}/avatar.png`)

  return {
    data,
    error
  }
}

export { folder, avatar }
