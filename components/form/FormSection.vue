<template>
  <div
    :form="form"
    class="absolute top-0 left-0 flex flex-col invisible w-full h-0 min-w-0 p-4 break-words bg-white border-0 opacity-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  form: String
})
</script>
