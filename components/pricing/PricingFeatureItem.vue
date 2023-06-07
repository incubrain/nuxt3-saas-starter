<template>
  <div class="flex justify-center items-center space-x-2">
    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/pricing_5_svg1.svg" alt="blue tick" />
    <p class="text-sm leading-none text-gray-600">
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
