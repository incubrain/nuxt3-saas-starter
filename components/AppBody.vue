<template>
  <div
    ref="scrollContainer"
    class="w-full relative overflow-y-scroll"
    :class="{
      'h-full': !hasNavs,
      'h-[calc(100vh-var(--nav-height-sm))] md:h-[calc(100vh-var(--nav-height-md))] lg:h-[calc(100vh-var(--nav-height-lg))]': hasNavs
    }"
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
