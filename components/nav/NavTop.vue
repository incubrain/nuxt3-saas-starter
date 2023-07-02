<template>
  <nav
    class="flex items-center md:items-stretch w-full justify-end md:justify-between border-b border-color foreground shadow relative z-50 px-4 h-[var(--nav-height-sm)] md:h-[var(--nav-height-md)] lg:h-[var(--nav-height-lg)]"
  >
    <div
      class="grid grid-cols-[minmax(160px,1fr)_minmax(1fr,420px)_minmax(160px,220px)] gap-6 items-center w-full md:flex justify-between"
    >
      <div class="flex md:hidden h-full items-center col-start-1 col-span-2 md:col-span-1">
        <AppBackButton />
      </div>
      <!-- logo -->
      <div class="hidden md:flex h-full items-center col-start-1 col-span-2 md:col-span-1">
        <NuxtLink to="/">
          <h1 class="text-xl md:text-2xl block font-semibold mr-4"> Incubrain </h1>
        </NuxtLink>
        <div
          v-show="!isAppRoute"
          class="flex gap-4 pl-4 justify-center border-l border-color items-center h-full leading-none text-sm whitespace-nowrap"
        >
          <NuxtLink v-for="link in navItems" :key="link.id" :to="link.slug" class="nav-link">
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="col-start-3 col-span-1 flex w-full relative">
        <div v-if="!isAppRoute" class="flex gap-4 w-full h-full items-center justify-end">
          <AppThemeSwitch />
          <NuxtLink to="/auth/login" class="nav-link">
            <UButton color="primary" icon="i-heroicons-forward"> Join </UButton>
          </NuxtLink>
        </div>
        <div v-else class="flex gap-4 w-full h-full items-center justify-end">
          <AppThemeSwitch />
          <NavAppProfile
            :img-src="
              getImageURL({
                bucket: 'profile-public',
                folderPath: `${user.id}/avatar`,
                file: user.avatar,
                isPrivate: false,
                transform: { width: 100, height: 100 }
              })
            "
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import navItems from './routes/website.json'
import { getImageURL } from '@/composables/supabase/get/image'
const route = useRoute()

const user = useSupabaseUser()

const isAppRoute = computed(() => route.path.includes('/app'))

// const { logout, session } = useAuth()

// const { error, session: currentSession } = await session.getCurrent()

// if (error) throw new Error('error getting user session')
</script>
