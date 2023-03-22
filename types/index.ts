import * as z from 'zod'
import * as schema from './zod'

// User Types
export type Role = z.infer<typeof schema.Role>
export type User = z.infer<typeof schema.User>
