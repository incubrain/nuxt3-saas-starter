<template>
  <div class="w-full h-full lg:grid-cols-[minmax(240px,10%)_minmax(600px,100%)] lg:grid relative">
    <NavTop class="lg:col-start-1 lg:col-span-2" />

    <NavSidebar
      class="lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 flex w-full h-full"
    />
    <AppBody has-navs class="lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-1">
      <slot />
    </AppBody>
    <NavMobi class="flex lg:hidden" />
    <UNotifications />
    <LogsPopover />
  </div>
</template>

<script setup></script>

<style></style>
