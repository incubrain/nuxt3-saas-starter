// import pinia
import { defineStore } from 'pinia'
import { ToastState } from '~/types'

// useToastStore.ts
export const useToastStore = defineStore('toast', {
  // unique id of the store across your application
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
