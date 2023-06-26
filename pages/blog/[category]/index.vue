<template>
  <div class="flex items-center flex-col">
    <h1 class="my-20 text-3xl font-semibold">{{ category }} Posts</h1>
    <div
      class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:grid-cols-2"
    >
      <BlogCard :category="category.toLocaleLowerCase()" />
    </div>
  </div>
</template>

<script setup lang="ts">
const params = useRoute().params
const category = computed(() => String(params.category))

definePageMeta({
  name: 'Blog',
  layout: 'blog'
})

console.log('params', category)
</script>

<style scoped></style>
