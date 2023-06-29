import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/schema'

export default function() {
  const config = useRuntimeConfig()
  const supaUrl = config.public.SUPABASE_URL
  const supaKey = config.public.SUPABASE_KEY
  return createClient<Database>(supaUrl, supaKey, {
    db: {
      schema: 'public'
    },
    auth: {
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: true
    }
  })
}
