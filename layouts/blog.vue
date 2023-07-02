<template>
  <div class="w-full h-full relative">
    <NavTop />
    <AppBody has-navs class="grid grid-cols-1 md:grid-cols-[0.2fr_1fr_0.2fr] gap-10">
      <div class="col-start-1 w-full h-full foreground hidden md:flex" />
      <slot />
      <div class="col-start-3 w-full h-full foreground hidden md:flex" />
    </AppBody>
    <NavMobi class="flex md:hidden" />
    <LogsPopover />
  </div>
</template>

<script setup lang="ts">
</script>

<style></style>
