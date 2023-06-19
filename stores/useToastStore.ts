import { ToastState } from '~/types'

export const useToastStore = defineStore('toast', {
  state: (): ToastState => ({
    toasts: []
  }),
  actions: {
    add(notification: Notification) {
      // assign an id to the notification
      const id = Date.now()
      this.toasts.push({ ...notification, id })
    },
    remove(id: string | number) {
      this.toasts = this.toasts.filter((n) => n.id !== id)
    }
  }
})
