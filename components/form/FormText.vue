<template>
  <div>
    <label
      class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80 w-full"
      :for="name"
    >
      {{ label }}
    </label>
    <VField
      :name="name"
      :rules="rules"
      v-slot="{ field, errors }"
      class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
    >
      <input :type="type" v-bind="field" :placeholder="placeholder" />
      <p v-if="errors.length">{{ errors[0] }}</p>
    </VField>
  </div>
</template>

<script setup lang="ts">

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  }
})
</script>
