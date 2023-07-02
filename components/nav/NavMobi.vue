<template>
  <div
    class="sticky bottom-0 left-0 flex-row w-full items-center justify-between foreground p-2 h-[var(--nav-height-mobi)]"
  >
    <ul class="flex h-full flex-row items-center justify-center w-full">
      <li
        v-for="page in navItems"
        :key="page.id"
        class="flex w-full h-full justify-center cursor-pointer items-center"
      >
        <NuxtLink :to="page.slug">
          <UIcon :name="page.icon" class="w-5 h-5" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import navItems from './routes/app.json'

// const route = useRoute()
</script>

<style scoped></style>
