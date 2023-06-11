<template>
  <VForm>
    <div v-for="field in p.schema" :key="field.name" class="mb-4">
      <label v-if="p.hasLabels" :for="field.name" class="block text-sm font-bold mb-2">{{
        field.label
      }}</label>

      <component
        :is="field.component"
        v-bind="field.props"
        :id="field.name"
        :name="field.name"
        :rules="(value) => validateWithZod(field.name, value)"
        class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300 dark:placeholder-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        :placeholder="field.label"
      />

      <VErrorMessage
        :name="field.name"
        class="text-error-400 dark:text-error-800 px-3 py-1 text-xs italic block"
      />
    </div>
    <slot />
  </VForm>
</template>

<script setup lang="ts">
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
    default: false
  }
})

const validateWithZod = (fieldName, value) => {
  try {
    p.schemaValidation.shape[fieldName].parse(value)
    return true
  } catch (error) {
    return JSON.parse(error)[0].message
  }
}
</script>
