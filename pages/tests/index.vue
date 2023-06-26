<template>
  <div>
    <NuxtLink v-for="item in navItems?.children" :key="item.id" :to="item.slug">
      <UButton>
        {{ item.name }}
      </UButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import links from '@/components/nav/routes/website.json'

const navItems = ref(links.find((item) => item.id === 4))

console.log('links', navItems.value)
</script>

<style scoped></style>
