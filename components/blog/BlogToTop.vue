<template>
  <button
    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl border-4 border-white shadow-lg font-medium h-[60px] w-[60px] rounded-full text-sm text-center p-2 mr-2 mb-2 lg:mr-4 lg:mb-4 fixed bottom-3 right-3 z-30"
    type="button"
    @click="toTop"
  >
    <UIcon name="i-mdi-home" class="w-full h-full" />
  </button>
</template>

<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
