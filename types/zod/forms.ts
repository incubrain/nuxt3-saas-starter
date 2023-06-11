import { z } from 'zod'
import { phoneNumberValidator } from './phoneNumber'

const passwordValidation = z
  .string()
  .min(8, 'Password must contain 8 characters')
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain a special character')

export const RegisterValidation = z.object({
  givenName: z.string(),
  email: z.string().email(),
  password: passwordValidation,
  confirmPassword: passwordValidation
})

export const LoginValidation = z.object({
  email: z.string().email(),
  password: passwordValidation
})

export const ForgotPasswordValidation = z.object({
  email: z.string().email()
})

export const ResetPasswordValidation = z.object({
  password: passwordValidation,
  confirmPassword: passwordValidation
})

export const CheckboxOptionValidation = z.object({
  value: z.string(),
  label: z.string(),
  icon: z.string()
})

export const ProfessionalInfoValidation = z.object({
  occupation: z.string().optional(),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  workEmail: z.string().email().optional(),
  workPhoneNumber: phoneNumberValidator.optional()
})

export const LocationValidation = z.object({
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional()
})

export const SocialMediaValidation = z.object({
  linkedinProfile: z.string().url().optional(),
  facebookProfile: z.string().url().optional(),
  twitterHandle: z.string().url().optional(),
  instagramHandle: z.string().url().optional()
})

export const InterestValidation = z.object({
  stargazing: z.boolean().optional(),
  learning: z.boolean().optional(),
  news: z.boolean().optional(),
  hostingEvents: z.boolean().optional(),
  attendingEvents: z.boolean().optional(),
  collaborating: z.boolean().optional(),
  networking: z.boolean().optional()
})
