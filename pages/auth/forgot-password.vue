<template>
  <div class="grid md:grid-cols-[500px_1fr] foreground h-full">
    <div class="col-start-1 px-8 h-full flex flex-col justify-center items-center relative z-20 border-r-2 border-color shadow-xl">
      <h2 class="text-2xl mb-6 text-center">
        Forgot Your Password?
      </h2>
      <FormDynamic
        :schema="forgotPasswordData"
        :schema-validation="ForgotPasswordValidation"
        class="w-full"
        @submit.prevent="handleForgotPassword"
      >
        <UButton
          color="primary"
          size="md"
          class="w-full flex items-center justify-center"
          type="submit"
        >
          Request Reset Email
        </UButton>
      </FormDynamic>
    </div>
    <div class="h-full hidden md:flex relative col-start-2">
      <div class="dark:bg-black/30 absolute w-full h-full left-0 top-0" />
      <NuxtImg src="/images/auth-bg.jpg" fit="fill" quality="70" alt="" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth'
import { ForgotPasswordValidation } from '@/types/zod'
import forgotPasswordData from '@/data/forms/forgot-password.json'

const auth = useAuth()

const handleForgotPassword = (value: { email: string }) => {
  auth.password.requestResetEmail(value.email)
}

definePageMeta({
  name: 'Forgot Password',
  layout: 'auth'
})
</script>
