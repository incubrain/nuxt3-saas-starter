import * as z from 'zod'

export const loginValidation = {
  givenName: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
}
