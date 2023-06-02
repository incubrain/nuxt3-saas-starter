export const userFollowers = async ({ userId }: { userId: number }) => {
  const client = useSupabase()
  const { data, error } = await client.rpc('get_user_followed', { userId })
  if (!data) throw new Error('No followed found')
  if (error) throw new Error(`Error getting followed: ${error}`)

  console.log('get_user_followed', data)
  return {
    data,
    error
  }
}

export const userFollowed = async ({ userId }: { userId: number }) => {
  const client = useSupabase()
  const { data, error } = await client.rpc('get_user_followers', { userId })
  if (!data) throw new Error('No followers found')
  if (error) throw new Error(`Error getting followers: ${error}`)

  console.log('get_user_followers', data)
  return {
    data,
    error
  }
}

export const userSingle = async ({ userId }: { userId: number }) => {
  const client = useSupabase()
  console.log('userSingle1', userId)
  const { data, error } = await client.rpc('get_user_single', {
    p_user_id: userId,
    p_current_user_id: 2
  })

  console.log('userSingle', data, error)
  if (!data) throw new Error('No user found')
  if (error) throw new Error(`Error getting user: ${error}`)

  return {
    data,
    error
  }
}

export const UsersMany = async ({ userId }: { userId: number }) => {
  const client = useSupabase()
  const { data, error } = await client.rpc('get_users_many', {
    p_user_id: userId
  })
  if (!data) throw new Error('No user found')
  if (error) throw new Error(`Error getting user: ${error}`)

  return {
    data,
    error
  }
}
