<template>
  <div class="w-full mt-3 space-x-3 flex justify-between">
    <UButton type="button" @click="prevStep"> Prev </UButton>
    <UButton type="button" @click="nextStep">Next</UButton>
  </div>
</template>

<script setup lang="ts">
defineProps({
  nextStep: {
    type: Function,
    required: true
  },
  prevStep: {
    type: Function,
    required: true
  }
})
</script>
