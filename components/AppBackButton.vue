<template>
  <div class="flex justify-center items-center">
    <UButton variant="faded" :padded="false" @click="router.back()">
      <UIcon name="i-material-symbols-arrow-back-rounded" class="w-5 h-5" />
    </UButton>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()

</script>

<style scoped>

</style>
