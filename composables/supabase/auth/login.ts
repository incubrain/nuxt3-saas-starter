import { Provider } from '@supabase/gotrue-js/dist/main/lib/types'

export const loginWithEmail = async (email: string, password: string) => {
  const client = useSupabase()
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

export async function loginWithOAuth(ChosenProvider: Provider) {
  const client = useSupabase()
  const { data, error } = await client.auth.signInWithOAuth({
    provider: ChosenProvider
  })

  return { data, error }
}
