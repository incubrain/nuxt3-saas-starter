import * as z from 'zod'
import * as validation from './zod'

// User Types
export type Role = z.infer<typeof validation.RoleValidation>
export type User = z.infer<typeof validation.UserValidation>

// Notification Types
export type Toast = z.infer<typeof validation.ToastValidation>
export type ToastAction = z.infer<typeof validation.ToastActionValidation>
export type ToastState = z.infer<typeof validation.ToastStateValidation>

// Form Types
export type LoginForm = z.infer<typeof validation.LoginValidation>
export type RegisterForm = z.infer<typeof validation.RegisterValidation>
export type ForgotPasswordForm = z.infer<typeof validation.ForgotPasswordValidation>
export type ResetPasswordForm = z.infer<typeof validation.ResetPasswordValidation>
export type LocationForm = z.infer<typeof validation.LocationValidation>
export type ProfessionalInfoForm = z.infer<typeof validation.ProfessionalInfoValidation>
export type SocialMediaForm = z.infer<typeof validation.SocialMediaValidation>
export type InterestsForm = z.infer<typeof validation.InterestValidation>

// Form Components
export type CheckboxOption = z.infer<typeof validation.CheckboxOptionValidation>
