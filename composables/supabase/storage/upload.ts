import { v4 as uuidv4 } from 'uuid'

const publicBucket = 'profile-public'
// const privateBucket = 'profile-private'

const profileSingle = async ({
  file,
  userId,
  type
}: {
  file: File
  userId: number
  type: string
}) => {
  const myUUID = uuidv4()
  const client = useSupabase()
  console.log('uploadFile', file, userId)
  const { data, error } = await client.storage
    .from(publicBucket)
    .upload(`${userId}/${type}/${myUUID}.jpeg`, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: 'image/jpeg'
    })

  console.log('uploadReturn', data, userId)

  return {
    data,
    error
  }
}

export { profileSingle }
