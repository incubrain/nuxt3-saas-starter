<!--
  Cathall route for rendering 404s
  https://nuxt.com/docs/guide/directory-structure/pages/#catch-all-route
-->

<template>
  <div class="min-h-[50vh] flex justify-center items-center">
    <div class="w-full h-full flex flex-col items-center justify-center">
      <h1 class="text-[10vw] mb-2 leading-[9vw]">
        404
      </h1>
      <h3 class="text-[4vh] mt-0">
        WE'RE LOST
      </h3>
      <NuxtLink
        :to="{ name: 'Home' }"
        class="whitespace-nowrap px-8 pt-4"
      >
        GO BACK HOME
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
