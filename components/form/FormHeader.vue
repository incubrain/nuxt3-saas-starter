<template>
  <div class="w-full max-w-full px-3 text-center flex-0">
    <h3 class="mt-12">{{ title }}</h3>
    <h5 class="font-normal dark:text-white text-slate-400">{{ description }}</h5>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
