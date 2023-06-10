export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const changeInProduction = false
  if (!user.value && to.fullPath.includes('/app') && changeInProduction) {
    return navigateTo('/auth/login')
  }
})
