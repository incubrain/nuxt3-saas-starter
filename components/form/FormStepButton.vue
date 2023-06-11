<template>
  <UButton
    :class="{ 'active-step': stepNumber === activeStep }"
    type="solid"
    @click="$emit('click')"
  >
    {{ title }}
  </UButton>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  stepNumber: {
    type: Number,
    required: true
  },
  activeStep: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.active-step {
  /* your CSS for the active step button here */
}
</style>
