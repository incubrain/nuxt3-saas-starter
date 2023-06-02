// store/data.js
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  users: t.User[]
  error: Error | null
}

export default defineStore('users', {
  state: (): AppState => ({
    users: [] as t.User[],
    error: null
  }),
  actions: {
    async getUsers() {
      const supabase = useSupabase()
      try {
        const { data, error } = await supabase
          .from('users')
          .select('id, given_name, surname, username, avatar, introduction')

        if (error) throw error
        this.users = validateWithZod(z.User, data)
      } catch (err) {
        console.error('error getting items', err)
      }
    }
  }
})
