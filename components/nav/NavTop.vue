<template>
  <!-- Navigation starts -->
  <nav
    class="flex items-center md:items-stretch w-full justify-end md:justify-between border-b border-color foreground shadow relative z-50 px-4 sm:h-[var(--nav-height-sm)] md:h-[var(--nav-height-md)] lg:h-[var(--nav-height-lg)]"
  >
    <div
      class="grid grid-cols-[minmax(160px,1fr)_minmax(1fr,420px)_minmax(160px,220px)] gap-6 items-center w-full md:flex justify-between"
    >
      <!-- logo -->
      <div class="h-full flex items-center col-start-1 col-span-2 md:col-span-1">
        <NuxtLink to="/">
          <h1 class="text-xl md:text-2xl block font-semibold mr-4"> Business </h1>
        </NuxtLink>
        <div
          class="hidden md:flex gap-4 pl-4 justify-center border-l border-color items-center h-full leading-none text-sm whitespace-nowrap"
        >
          <NuxtLink to="/features" class="nav-link"> Features </NuxtLink>
          <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
          <NuxtLink to="/pricing" class="nav-link"> Pricing </NuxtLink>
        </div>
      </div>
      <div class="col-start-3 col-span-1 flex w-full relative">
        <div class="flex gap-4 w-full h-full items-center justify-end">
          <AppThemeSwitch />
          <NuxtLink to="/auth/login" class="nav-link">
            <UButton color="primary" icon="i-heroicons-forward"> Join </UButton>
          </NuxtLink>
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
