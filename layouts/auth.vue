<template>
  <div class="w-full h-[100vh] relative">
    <NavTop />
    <AppBody class="lg:grid lg:grid-cols-[500px_1fr] foreground">
      <div
        class="lg:col-start-1 px-8 h-full w-full flex flex-col justify-center items-center relative z-20 border-r-2 border-color shadow-xl"
      >
        <slot />
      </div>
      <div class="h-full hidden lg:flex relative lg:col-start-2 overflow-hidden">
        <div class="dark:bg-black/30 absolute w-full h-full left-0 top-0" />
        <NuxtImg
          src="/images/auth-bg.jpg"
          quality="70"
          class="w-full object-cover object-center"
          alt="Auth Background Image"
        />
      </div>
    </AppBody>
    <LogsPopover />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
