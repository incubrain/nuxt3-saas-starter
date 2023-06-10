import * as z from 'zod'

export const registerValidation = {
  givenName: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must contain 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character'),
  confirmPassword: z
    .string()
    .min(8, 'Password must contain 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character')
}

export const loginValidation = {
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must contain 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character')
}

export const forgotPasswordValidation = {
  email: z.string().email()
}
export const resetPasswordValidation = {
  password: z
    .string()
    .min(8, 'Password must contain 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character'),
  confirmPassword: z
    .string()
    .min(8, 'Password must contain 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character')
}
