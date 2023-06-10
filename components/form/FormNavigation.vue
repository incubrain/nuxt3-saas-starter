<template>
  <div class="w-full mt-3 space-x-3 flex justify-between">
    <button type="button" @click="prevStep" class="...">Prev</button>
    <button type="button" @click="nextStep" class="...">Next</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  nextStep: Function,
  prevStep: Function
})
</script>
