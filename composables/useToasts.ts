import { useToastStore } from '~/stores/useToastStore'
import { Toast } from '~/types'
import { ToastValidation } from '~/types/zod'

export function useToast() {
  const toastStore = useToastStore()

  function add(notification: Toast) {
    try {
      // Validate notification with Zod schema before adding it
      const validatedNotification: Toast = ToastValidation.parse(notification)
      toastStore.add(validatedNotification)
    } catch (error) {
      console.error('Failed to add notification:', error)
      // Handle error (e.g., show error notification, log to an error reporting service, etc.)
    }
  }

  function remove(id: string | number) {
    try {
      // Remove the notification
      toastStore.remove(id)
    } catch (error) {
      console.error('Failed to remove notification:', error)
      // Handle error (e.g., show error notification, log to an error reporting service, etc.)
    }
  }

  return { add, remove }
}
