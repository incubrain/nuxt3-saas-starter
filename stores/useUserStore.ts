export default defineStore('user', {
  state: () => ({
    user: {
      name: 'Tester'
    }
  }),
  actions: {
    setUser(user) {
      this.user = user
    }
  }
})
