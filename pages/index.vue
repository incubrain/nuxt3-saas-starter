<template>
  <div>
    <h1 class="text-color:white"> Welcome to the homepage </h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <div v-if="u.users" class="grid grid-cols-3 gap-4">
      <div v-for="user in u.users" :key="user.id" class="p-4 rounded-md shadow-md foreground">
        <div class="flex gap-2 pb-4">
          <NuxtImg
            v-if="user.avatar"
            :src="
              getImageURL({
                bucket: 'profile-public',
                folderPath: `${user.id}/avatar`,
                file: user.avatar,
                isPrivate: false,
                transform: { width: 100, height: 100 }
              })
            "
            alt=""
          />
          <div class="flex flex-col gap-2">
            <h3> {{ user.given_name }}</h3>
            <h6> @{{ user.username }}</h6>
          </div>
        </div>
        <p> {{ user.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImageURL } from '@/composables/supabase/get/image'

const u = useUsers()
u.getUsers()
</script>

<style></style>
