export const postsMany = async () => {
  const client = useSupabase()
  const { data, error } = await client.from('posts').select()

  return {
    data,
    error
  }
}

export const postById = async (postId: number) => {
  const client = useSupabase()
  const { data, error } = await client.from('posts').select('*').eq('id', postId)

  return {
    data,
    error
  }
}

export const postByCategory = async (category: string) => {
  const client = useSupabase()
  const { data, error } = await client.from('posts').select('*').eq('category_id', category)

  return {
    data,
    error
  }
}
