// This supports HMR
export default defineAppConfig({
  title: 'Nuxt 3 SaaS Starter',
  ui: {
    primary: 'sky',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'bottom-0 right-0'
    },
    table: {
      thead: 'foreground sticky top-0',
      td: {
        base: 'min-w-[160px]',
      },
      tr: {
        base: 'hover:foreground border-b border-color',
      }
    }
  }
})
