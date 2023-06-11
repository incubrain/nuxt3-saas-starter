// don't forget to add to this file if you make any changes in the database
import * as z from 'zod'

// What role does this user have in your application?
export const RoleValidation = z.object({
  id: z.number(),
  name: z.string().nullable(),
  body: z.string().nullable().optional()
})

export const UserValidation = z.object({
  id: z.number(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  given_name: z.string(),
  surname: z.string().nullable().optional(),
  username: z.string().nullable(),
  avatar: z.string().nullable(),
  introduction: z.string().nullable().optional(),
  role_id: z.number().optional()
})
