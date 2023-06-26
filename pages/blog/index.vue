<template>
  <div class="flex items-center flex-col">
    <h1 class="my-20 text-3xl font-semibold">Incubrain Blog</h1>
    <div
      class="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8 xl:grid-cols-4"
    >
      <BlogCard />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'Blog',
  layout: 'blog'
})
</script>

<style scoped></style>
