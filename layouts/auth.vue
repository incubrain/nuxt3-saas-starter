<template>
  <div class="w-full h-full">
    <NavTop />
    <AppBody>
      <div class="grid md:grid-cols-[500px_1fr] foreground h-full">
        <div
          class="col-start-1 px-8 h-full w-full flex flex-col justify-center items-center relative z-20 border-r-2 border-color shadow-xl"
        >
          <slot />
        </div>
        <div class="h-full hidden md:flex relative col-start-2 overflow-hidden">
          <div class="dark:bg-black/30 absolute w-full h-full left-0 top-0" />
          <NuxtImg src="/images/auth-bg.jpg" quality="70" alt="" class="w-full object-cover" />
        </div>
      </div>
    </AppBody>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
