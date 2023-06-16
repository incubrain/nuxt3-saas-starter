<template>
  <div>
    <UButton variant="link" :padded="false" @click="isOpen = true">
      <UAvatar :src="imgSrc" alt="Avatar" chip-color="primary" chip-position="top-right" />
    </UButton>
    <USlideover v-model="isOpen">
      <p>app profile menu</p>
    </USlideover>
  </div>
</template>

<script setup lang="ts">

const isOpen = ref(false)

defineProps({
  imgSrc: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

</style>
