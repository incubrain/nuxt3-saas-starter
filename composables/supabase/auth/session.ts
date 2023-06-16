export const getCurrent = async () => {
  const client = useSupabase()
  // Get the auth session.
  const {
    data: { session },
    error
  } = await client.auth.getSession()

  return {
    session,
    error
  }
}

export const refresh = async () => {
  const client = useSupabase()
  const { data, error } = await client.auth.refreshSession()

  return {
    data,
    error
  }
}
