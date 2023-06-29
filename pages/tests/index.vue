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

console.log(
  'testLinks',
  links.find((item) => item.id === 4)
)

const navItems = ref(links.find((item) => item.id === 5))

console.log('links', navItems.value)
</script>

<style scoped></style>
