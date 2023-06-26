<template>
  <div
    class="fixed left-0 w-full hidden lg:relative h-full flex-col foreground lg:flex py-8 pl-8 border-r border-color"
  >
    <ul class="w-full">
      <li
        v-for="page in navItems"
        :key="page.id"
        class="flex w-full justify-between cursor-pointer items-center"
      >
        <NuxtLink
          :to="`/app${page.slug}`"
          class="flex flex-row items-center justify-center group w-full overflow-hidden"
        >
          <span
            :class="
              route.path.split('/')[1] === page.slug.split('/')[1]
                ? 'w-full background p-3 flex items-center justify-start gap-3 rounded-[.5rem_0_0_.5rem] text-sm'
                : 'w-full p-3 flex items-center justify-start gap-3 rounded-[.5rem_0_0_.5rem] text-sm'
            "
          >
            <UIcon :name="page.icon" class="w-[20px] h-[20px]" />
            {{ page.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import navItems from './routes/app.json'

const route = useRoute()
</script>

<style scoped></style>
