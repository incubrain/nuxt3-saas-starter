export default defineNuxtRouteMiddleware((to, _from) => {
  console.log('auth middleware', to)
  const user = useSupabaseUser()
  if (!user.value && to.fullPath.includes('/app')) {
    return navigateTo('/login')
  }
})
