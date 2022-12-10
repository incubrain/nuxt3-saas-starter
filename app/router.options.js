// This is a workaround for the issue with the scrollBehavior still present in Nuxt 3.0
export default {
  scrollBehavior () {
    return false
  }
}
