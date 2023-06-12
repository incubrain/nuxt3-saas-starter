vue3<template>
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
  </div>
</template>

<script setup lang="ts">

import {
  RegisterValidation,
  InterestValidation,
  SocialMediaValidation,
  ProfessionalInfoValidation
} from '@/types/zod'

import { interestsData, registerData, socialData, professionalData } from '@/data/forms'

definePageMeta({
  name: 'Something',
  layout: 'onboarding'
})
</script>
