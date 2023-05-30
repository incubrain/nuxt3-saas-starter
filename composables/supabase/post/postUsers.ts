import users from '@/data/users.json'

export async function createManyUsers() {
  const client = usePublicClient()
  const { error } = await client.from('users').insert(users)

  console.log('createManyUsers', error)
}
