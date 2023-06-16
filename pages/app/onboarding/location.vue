<template>
  <div class="w-full flex flex-col justify-center items-center">
    <h2 class="text-2xl mb-6 text-left w-full">Location</h2>
    <FormDynamic
      :has-labels="true"
      :schema="locationData"
      :schema-validation="LocationValidation"
      class="w-full"
      @submit.prevent="handleSubmit"
    >
      <UButton
        color="primary"
        size="md"
        class="w-full flex items-center justify-center"
        type="submit"
      >
        Update info
      </UButton>
    </FormDynamic>
  </div>
</template>

<script setup lang="ts">
import { LocationValidation } from '@/types/zod'

import { locationData } from '@/data/forms'

definePageMeta({
  name: 'Location',
  layout: 'onboarding'
})

const handleSubmit = (value) => {
  console.log('submit', value)
}

</script>
