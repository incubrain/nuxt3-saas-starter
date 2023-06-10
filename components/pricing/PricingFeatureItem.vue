<template>
  <div class="flex justify-center items-center space-x-2">
    <UIcon name="i-material-symbols-check-small" class="text-primary-600 dark:text-primary-800 w-5 h-5" />
    <p class="text-sm leading-none">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
