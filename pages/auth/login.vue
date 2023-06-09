<template>
  <div class="grid md:grid-cols-[500px_1fr] foreground h-full">
    <div
      class="col-start-1 px-8 h-full flex flex-col justify-center items-center relative z-20 border-r-2 border-color shadow-xl"
    >
      <h2 class="text-2xl mb-6 text-center">Sign In</h2>
      <FormDynamic
        :schema="loginData"
        :schema-validation="LoginValidation"
        class="w-full"
        @submit.prevent="handleLogin"
      >
        <UButton
          color="primary"
          size="md"
          class="w-full flex items-center justify-center"
          type="submit"
        >
          Sign In
        </UButton>
      </FormDynamic>
      <p class="text-center text-sm mt-4">
        <NuxtLink to="/forgot-password">Forgot Password?</NuxtLink>
      </p>
      <UButton
        class="w-full mt-6 flex justify-center items-center gap-4"
        color="white"
        @click="handleGoogleSignIn"
      >
        <NuxtImg src="/icons/google.svg" alt="Google Logo" width="28px" />
        Sign In with Google
      </UButton>
    </div>
    <div class="h-full hidden md:flex relative col-start-2">
      <div class="dark:bg-black/30 absolute w-full h-full left-0 top-0" />
      <NuxtImg src="/images/auth-bg.jpg" fit="fill" quality="70" alt="" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth'
import { LoginValidation } from '@/types/zod'
import loginData from '@/data/forms/login.json'

const email = ref('')
const password = ref('')
const auth = useAuth()

const handleLogin = () => {
  auth.login.withEmail(email.value, password.value)
}

async function handleGoogleSignIn() {
  try {
    const { data, error } = await auth.login.withOAuth('google')

    if (error) throw error
    console.log('User logged in via Google', data)
  } catch (error) {
    console.error('Error logging in via Google', error)
  }
}

definePageMeta({
  name: 'Login',
  layout: 'auth'
})
</script>
