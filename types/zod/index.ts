import * as forms from './forms'
import * as users from './users'
import * as toasts from './toasts'

// Forms
export const LoginValidation = forms.LoginValidation
export const RegisterValidation = forms.RegisterValidation
export const ForgotPasswordValidation = forms.ForgotPasswordValidation
export const ResetPasswordValidation = forms.ResetPasswordValidation
export const ProfessionalInfoValidation = forms.ProfessionalInfoValidation
export const SocialMediaValidation = forms.SocialMediaValidation
export const LocationValidation = forms.LocationValidation
export const InterestValidation = forms.InterestValidation

// Form Components
export const CheckboxOptionValidation = forms.CheckboxOptionValidation

// Users
export const UserValidation = users.UserValidation
export const RoleValidation = users.RoleValidation

// Toasts
export const ToastValidation = toasts.ToastValidator
export const ToastStateValidation = toasts.ToastStateValidator
export const ToastActionValidation = toasts.ToastActionValidator
