<template>
  <div class="w-full h-full relative">
    <NavTop />
    <AppBody has-navs class="p-4">
      <slot />
    </AppBody>
    <NavMobi class="flex md:hidden" />
    <LogsPopover />
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
