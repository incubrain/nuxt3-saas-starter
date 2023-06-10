<template>
  <div class="grid md:grid-cols-[500px_1fr] foreground h-full">
    <div
      class="col-start-1 px-8 h-full flex flex-col justify-center items-center relative z-20 border-r-2 border-color shadow-xl"
    >
      <h2 class="text-2xl mb-6 text-center">Reset Password</h2>
      <FormDynamic
        :schema="resetPasswordData"
        :schema-validation="ResetPasswordValidation"
        class="w-full"
        @submit.prevent="handleResetPassword"
      >
        <UButton
          color="primary"
          size="md"
          class="w-full flex items-center justify-center"
          type="submit"
        >
          Reset Password
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
import { ResetPasswordValidation } from '@/types/zod'
import resetPasswordData from '@/data/forms/reset-password.json'

const auth = useAuth()
// const router = useRouter()

const handleResetPassword = (value: { password: string, confirmPassword: string }) => {
  // Get the user token from the URL
  if (value.password === value.confirmPassword) {
    auth.password.update(value.password)
  }
}

definePageMeta({
  name: 'Reset Password',
  layout: 'auth'
})
</script>
