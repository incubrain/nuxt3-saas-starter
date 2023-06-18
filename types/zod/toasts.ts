import { z } from 'zod'

export const ToastActionValidator = z.object({
  variant: z.string(),
  color: z.string(),
  label: z.string()
})

export const ToastValidator = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  color: z.string().optional(),
  timeout: z.number().optional(),
  ui: z.unknown().optional(),
  avatar: z.unknown().optional(),
  closeButton: z.unknown().optional(),
  actions: z.array(ToastActionValidator).optional(),
  callback: z.function().optional()
})

export const ToastStateValidator = z.object({
  toasts: z.array(ToastValidator)
})
