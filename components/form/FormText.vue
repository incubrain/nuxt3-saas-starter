<template>
  <div>
    <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" :for="name">{{
      label
    }}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  name: String,
  placeholder: String,
  label: String
})
</script>
