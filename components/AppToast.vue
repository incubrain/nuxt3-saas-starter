<template>
  <UButton @click="showToast">
    <slot />
  </UButton>
</template>

<script setup lang="ts">
import { NotificationAction } from '@nuxthq/ui/dist/runtime/types'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  icon: {
    type: String,
    required: false,
    default: ''
  },
  color: {
    type: String,
    required: false,
    default: ''
  },
  timeout: {
    type: Number,
    required: false,
    default: 5000
  },
  closeButton: {
    type: Object,
    required: false,
    default: () => ({})
  },
  silent: {
    type: Boolean,
    required: false,
    default: false
  },
  actions: {
    type: Array,
    required: false,
    default: () => []
  },
  callback: {
    type: Function,
    required: false,
    default: () => {}
  }
})

const toast = useToast()

const showToast = () => {
  if (!props.silent) {
    toast.add({
      id: props.id,
      title: props.title,
      description: props.description,
      icon: props.icon,
      color: props.color,
      timeout: props.timeout,
      closeButton: props.closeButton,
      actions: props.actions as NotificationAction[],
      callback: props.callback
    })
  } else {
    console.log('silent notification', props)
  }
}
</script>
