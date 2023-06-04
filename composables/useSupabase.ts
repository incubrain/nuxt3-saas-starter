import { Database } from '@/types/schema'

export default () => useSupabaseClient<Database>()
