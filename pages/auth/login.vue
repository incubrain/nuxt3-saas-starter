<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-2xl mb-6 text-center"> Sign In </h2>
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
      <NuxtLink to="/auth/forgot-password"> Forgot Password? </NuxtLink>
    </p>
    <UButton
      class="w-full mt-6 flex justify-center items-center gap-4"
      color="white"
      @click="handleProviderSignIn('google')"
    >
      <NuxtImg src="/icons/google.svg" alt="Google Logo" width="28px" />
      Sign In with Google
    </UButton>
    <UButton
      class="w-full mt-6 flex justify-center items-center gap-4"
      color="white"
      @click="handleProviderSignIn('github')"
    >
      <UIcon name="i-mdi-github" alt="Github Logo" width="28px" />
      Sign In with Github
    </UButton>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth'
import { LoginValidation } from '@/types/zod'
import loginData from '@/data/forms/login.json'

const auth = useAuth()

const handleLogin = (value: { email: string; password: string }) => {
  auth.login.withEmail(value.email, value.password)
}

async function handleProviderSignIn(provider) {
  try {
    const { data, error } = await auth.login.withOAuth(provider)

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
