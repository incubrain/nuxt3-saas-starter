import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/schema'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const supaUrl = config.public.SUPABASE_URL
  const supaKey = config.public.SUPABASE_KEY

  const publicClient = createClient<Database>(supaUrl, supaKey) as SupabaseClient<Database>

  nuxtApp.provide('publicClient', publicClient)
})
