import * as z from 'zod'
import * as v from './zod'

// User Types
export type Role = z.infer<typeof v.RoleValidation>
export type User = z.infer<typeof v.UserValidation>

// Form Types
export type LoginForm = z.infer<typeof v.LoginValidation>
