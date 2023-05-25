<template>
  <div>
    <h1 class="text-color:white">
      Welcome to the homepage
    </h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <h3 v-if="u.users">Users from supabase: {{ u.users }}</h3>
  </div>
</template>

<script setup lang="ts">

const u = useUsers()
u.getUsers()

</script>

<style>

</style>
