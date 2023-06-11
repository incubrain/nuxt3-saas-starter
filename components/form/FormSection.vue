<template>
  <div
    :form="form"
    class="flex flex-col w-full mx-auto p-4 break-words rounded-md max-w-[var(--max-w-sm)] md:max-w-[var(--max-w-md)] lg:max-w-[var(--max-w-lg)] foreground"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  form: {
    type: String,
    required: true
  }
})
</script>
