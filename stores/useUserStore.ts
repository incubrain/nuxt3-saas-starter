export default defineStore('user', {
  state: () => ({
    user: {
      id: 1,
      created_at: 'date',
      updated_at: 'date',
      given_name: 'Tester',
      surname: 'Lester',
      username: 'Pester',
      avatar: 'https://placekitten.com/200/300',
      introduction: 'Hi my name is Tester',
      role_id: 1
    }
  }),
  actions: {
    setUser(user) {
      this.user = user
    }
  }
})
