<template>
  <div
    ref="scrollContainer"
    class="w-full h-[calc(100vh-var(--nav-height-sm))] md:h-[calc(100vh-var(--nav-height-md))] lg:h-[calc(100vh-var(--nav-height-lg))] relative overflow-y-scroll"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const scrollContainer = ref(null)

onMounted(() => {
  watch(route, () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  })
})
</script>

<style scoped></style>
