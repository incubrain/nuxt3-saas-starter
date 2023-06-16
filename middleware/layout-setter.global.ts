export default defineNuxtRouteMiddleware((to) => {
  console.log('defineNuxtRouteMiddleware', to)
  if (to.fullPath.includes('/app')) {
    setPageLayout('app')
  }
})
