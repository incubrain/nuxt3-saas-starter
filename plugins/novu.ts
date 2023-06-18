import NotificationCenterPlugin from '@novu/notification-center-vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(NotificationCenterPlugin)
})
