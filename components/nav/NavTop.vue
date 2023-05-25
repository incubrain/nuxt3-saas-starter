<template>
  <!-- Navigation starts -->
  <nav
    class="flex items-center md:items-stretch w-full justify-end md:justify-between bg-secondary-200 dark:bg-secondary-800 shadow relative z-[0] p-2"
  >
    <div
      class="grid grid-cols-[minmax(160px,1fr)_minmax(1fr,420px)_minmax(160px,220px)] gap-6 items-center w-full md:flex justify-between text-black"
    >
      <!-- logo -->
      <div
        class="h-full flex items-center pl-3 md:pl-4 col-start-1 col-span-2 md:col-span-1"
      >
        <h1 class="text-xl md:text-2xl block font-semibold px-4 mr-4">
          Business
        </h1>
        <div
          v-show="route.path === '/'"
          class="hidden lg:flex gap-4 pl-4 justify-center border-l items-center h-full leading-none text-sm whitespace-nowrap"
        >
          <NuxtLink to="/users" class="hover:text-[#471bc9]">
            AstroTribe
          </NuxtLink>
          <NuxtLink to="/about" class="hover:text-[#471bc9]"> About </NuxtLink>
          <NuxtLink to="/contact" class="hover:text-[#471bc9]">
            Contact us
          </NuxtLink>
        </div>
      </div>
      <div class="col-start-3 col-span-1 pr-3 md:pr-6 flex w-full relative">
        <div class="flex gap-4 w-full h-full items-center justify-end">
          <AppThemeSwitch />
          <div v-show="route.path === '/'">
            <UButton color="primary" icon="i-heroicons-forward"> Join </UButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

// const { logout, session } = useAuth()

// const { error, session: currentSession } = await session.getCurrent()

// if (error) throw new Error('error getting user session')
</script>
