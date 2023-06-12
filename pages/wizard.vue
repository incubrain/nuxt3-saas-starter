<template>
  <div class="step-form-wizard">
    <div v-for="(step, index) in steps" :key="index">
      <div v-show="currentStep === index">
        <FormDynamic
          :schema="step.schema"
          :schema-validation="step.validation"
          class="w-full"
          @submit.prevent="handleNext"
        >
          <UButton :disabled="!canGoBack" @click="handleBack">Back</UButton>
          <UButton :disabled="!canAdvance" @click="handleNext">Next</UButton>
        </FormDynamic>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import {
  RegisterValidation,
  InterestValidation,
  SocialMediaValidation,
  ProfessionalInfoValidation
} from '@/types/zod'

import { interestsData, registerData, socialData, professionalData } from '@/data/forms'

const steps = ref([
  { schema: registerData, validation: RegisterValidation },
  { schema: interestsData, validation: InterestValidation },
  { schema: socialData, validation: SocialMediaValidation },
  { schema: professionalData, validation: ProfessionalInfoValidation }
])
const currentStep = ref(0)

const { validate: validateForm } = useForm()

const handleNext = async () => {
  const isFormValid = await validateForm()
  if (isFormValid && currentStep.value < steps.value.length - 1) {
    currentStep.value++
  }
}

const handleBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const canAdvance = computed(() => currentStep.value < steps.value.length - 1)
const canGoBack = computed(() => currentStep.value > 0)
</script>
