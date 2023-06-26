export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath.includes('/app')) {
    setPageLayout('app')
  }
})
