<template>
  <div>
    <slot />
  </div>
</template>

<script>

</script>

<style>
/*
Layout transition animation
https://nuxt.com/docs/getting-started/transitions
*/
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
