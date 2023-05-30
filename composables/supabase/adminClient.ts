import { createClient } from '@supabase/supabase-js'

const adminClient = () => {
  const cfg = useRuntimeConfig()
  const serviceKey = cfg.SUPABASE_SERVICE_KEY
  const url = 'http://localhost:3000/'
  return createClient(url, serviceKey)
}

export default adminClient
