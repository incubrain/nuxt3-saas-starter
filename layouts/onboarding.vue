<template>
  <div class="relative w-full h-full">
    <AppBody :has-navs="false">
      <div class="grid grid-cols-[1fr_minmax(250px,450px)_1fr] min-h-[100vh] py-24">
        <div class="w-full h-full bg-blue-100 absolute left-0 top-0" />
        <div class="col-span-1 col-start-1 w-full" />
        <div class="col-span-1 relative z-50 h-full space-y-16 px-4">
          <img src="/images/logo.png" class="w-24 h-24 mx-auto" />
          <div class="space-y-4">
            <h1 class="relative z-50 w-full text-center">Tell us about yourself</h1>
            <p class="relative z-50 w-full text-center font-semibold">This will help us to hit the ground running</p>
          </div>
          <div>
            <slot />
          </div>
        </div>
        <div class="col-span-1 col-start-3" />
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
