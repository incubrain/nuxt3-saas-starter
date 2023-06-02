<template>
  <div class="w-full h-[100vh]">
    <NavTop />
    <AppBody>
      <slot />
    </AppBody>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
