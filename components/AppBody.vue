<template>
  <div
    ref="scrollContainer"
    :class="
      hasNavs
        ? 'w-full relative overflow-y-scroll h-[calc(100vh-calc(var(--nav-h-sm)+var(--nav-h-mobi)))] md:h-[calc(100vh-var(--nav-h-md))] lg:h-[calc(100vh-var(--nav-h-lg))] min-h-[calc(100vh-calc(var(--nav-h-sm)+var(--nav-h-mobi)))] md:min-h-[calc(100vh-var(--nav-h-md))] lg:min-h-[calc(100vh-var(--nav-h-lg))]'
        : 'w-full relative overflow-y-scroll h-full'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasNavs: {
    type: Boolean,
    default: false
  }
})

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
