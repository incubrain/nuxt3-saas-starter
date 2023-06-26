// store/data.js
import { validateWithZod } from '../utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  users: t.User[]
  error: Error | null
}

export default defineStore('useUsers', {
  state: (): AppState => ({
    users: [] as t.User[],
    error: null
  }),
  actions: {
    async getUsers() {
      const client = useSupabase()
      try {
        const { data, error } = await client
          .from('users')
          .select('id, given_name, surname, username, avatar, introduction')

        if (error) throw error
        this.users = validateWithZod(z.UserValidation, data)
      } catch (err) {
        console.error('error getting items', err)
      }
    },
    async getManyUsers() {
      const client = useSupabase()
      try {
        const { data, error } = await client.rpc('get_users_many', {
          p_user_id: 1
        })

        if (error) throw error
        this.users = validateWithZod(z.UserValidation, data)
      } catch (err) {
        console.error('error getting items', err)
      }
    }
  }
})
