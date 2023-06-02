import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/schema'

export default () => {
  const nuxtApp = useNuxtApp()
  const client = nuxtApp.$publicClient as SupabaseClient<Database>
  return client
}
