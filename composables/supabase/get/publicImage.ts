export const profileSingle = ({
  userId,
  type,
  fileName
}: {
  userId: number
  type: string
  fileName: string
}) => {
  // !todo: add dynamic transforms
  // {
  //   transform: {
  //     width: 100,
  //     height: 100,
  //   }
  // }
  console.log('profileSingle', userId, type)
  const client = useSupabase()
  const { data } = client.storage
    .from('profile-public')
    .getPublicUrl(`${userId}/${type}/${fileName}.png`)

  console.log('profileSingle2', data)
  return {
    data
  }
}
