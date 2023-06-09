<template>
  <VForm>
    <div v-for="field in p.schema" :key="field.name" class="mb-4">
      <label v-if="p.hasLabels" :for="field.name" class="block text-sm font-bold mb-2">{{
        field.label
      }}</label>
      <VField
        :id="field.name"
        :as="field.as"
        :name="field.name"
        :rules="(value) => validateWithZod(field.name, value)"
        class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="field.label"
      />
      <VErrorMessage :name="field.name" class="text-error-400 dark:text-error-800 px-3 py-1 text-xs italic block" />
    </div>
    <slot />
  </VForm>
</template>

<script setup lang="ts">
import { ZodError } from 'zod'

const p = defineProps({
  schema: {
    type: Object,
    required: true
  },
  schemaValidation: {
    type: Object,
    required: true
  },
  hasLabels: {
    type: Boolean,
    required: true
  }
})

const validateWithZod = (fieldName, value) => {
  try {
    p.schemaValidation[fieldName].parse(value)
    return true
  } catch (error: ZodError) {
    return JSON.parse(error)[0].message
  }
}
</script>
