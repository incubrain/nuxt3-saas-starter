export const logout = async () => {
  const client = useSupabase()
  const { error } = await client.auth.signOut()

  // removes session cookie
  // removes localStorage
  // update state

  return {
    error
  }
}
