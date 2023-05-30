<template>
  <div class="flex h-screen">
    <div class="w-1/3 m-auto p-10 bg-white rounded shadow">
      <h2 class="text-2xl mb-6 text-center">Sign In</h2>
      <form @submit.prevent="handleLogin">
        <input
          class="w-full mb-6 p-2 border border-gray-200 rounded"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          class="w-full mb-6 p-2 border border-gray-200 rounded"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <button class="w-full p-2 bg-blue-500 text-white rounded" type="submit"> Sign In </button>
      </form>
      <p class="text-center text-sm text-gray-500 mt-4">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </p>
      <button class="w-full p-2 bg-red-500 text-white rounded mt-6" @click="handleGoogleSignIn">
        Sign In with Google
      </button>
    </div>
    <div
      class="w-2/3 bg-cover"
      :style="`background-image: url(${util.asset.dynamic('images/auth-bg.jpg')});`"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth'

const email = ref('')
const password = ref('')
const client = useClient()
const util = useUtils()
const auth = useAuth()

const { user, session, error } = auth.loginWithEmail({
  email: email.value,
  password: password.value
})

async function handleGoogleSignIn() {
  try {
    const { user, session, error } = await client.auth.signInWithOAuth({
      provider: 'google'
    })

    if (error) throw error
    console.log('User logged in via Google', user)
  } catch (error) {
    console.error('Error logging in via Google', error)
  }
}
</script>
