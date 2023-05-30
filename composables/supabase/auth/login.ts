export const loginWithEmail = async (email: string, password: string) => {
  const client = usePublicClient()
  console.log('login', client, email, password)
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password
  })

  return {
    data,
    error
  }
}

export async function loginWithOAuth(provider: string) {
  const client = usePublicClient()
  const { data, error } = await client.auth.signInWithOAuth({
    provider
  })

  if (data) {
    console.log('data: ', data)
  }

  if (error) {
    console.log('error: ', error)
  }
}
