<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-2xl mb-6 text-center">Sign Up</h2>
    <FormDynamic
      :schema="registerData"
      :schema-validation="RegisterValidation"
      class="w-full"
      @submit.prevent="handleRegister"
    >
      <UButton
        color="primary"
        size="md"
        class="w-full flex items-center justify-center"
        type="submit"
      >
        Sign Up
      </UButton>
    </FormDynamic>
    <p class="text-center text-sm mt-4">
      <NuxtLink to="/auth/login">Already have an account? Sign In</NuxtLink>
    </p>
    <UButton
      class="w-full mt-6 flex justify-center items-center gap-4"
      color="white"
      @click="handleGoogleSignUp"
    >
      <NuxtImg src="/icons/google.svg" alt="Google Logo" width="28px" />
      Sign Up with Google
    </UButton>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth'
import { RegisterValidation } from '@/types/zod'
import registerData from '@/data/forms/register.json'

const auth = useAuth()

const handleRegister = async (value: { email: string; password: string }) => {
  const { email, password } = value
  await auth.register.withEmail(email, password)
}

async function handleGoogleSignUp() {
  try {
    const { data, error } = await auth.register.withOauth('google')

    if (error) throw error
    console.log('User registered via Google', data)
  } catch (error) {
    console.error('Error registering via Google', error)
  }
}

definePageMeta({
  name: 'Register',
  layout: 'auth'
})
</script>
