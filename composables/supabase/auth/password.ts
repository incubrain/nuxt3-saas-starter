const url = 'http://localhost:3000/'

export const showResetForm = false

export const requestResetEmail = async (email: string) => {
  const client = useSupabase()
  const { data, error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo: `${url}reset-password`
  })

  return {
    data,
    error
  }
}

export const update = async (newPassword: string) => {
  const client = useSupabase()
  const { data, error } = await client.auth.updateUser({
    password: newPassword
  })

  return {
    data,
    error
  }
}
