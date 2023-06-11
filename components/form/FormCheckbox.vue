<template>
  <div>
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      class="appearance-none rounded-2xl shadow-soft-xl bg-white/70 border-0 focus:outline-none checked:ring-0 checked:bg-primary checked:border-primary text-primary transition-all ease-linear cursor-pointer"
    />
    <label :for="id" class="ml-2 text-sm text-slate-700 dark:text-white/80">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'checkbox'
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  }
})
</script>
