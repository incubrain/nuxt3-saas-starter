<template>
  <div class="space-y-10">
    <div class="flex gap-8">
      <UButton @click="testNuxtServer"> Test Server</UButton>
      <UButton @click="testNuxtClient"> Test Client</UButton>
      <UButton @click="getNuxtServerLoggedData"> Get Server</UButton>
      <UButton @click="getNuxtClientLoggedData"> Get Client</UButton>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="p-8 space-y-2 shadow-md rounded-md border">
        <p v-for="item in nuxtServerLoggedData" :key="item.timestamp"> -- {{ item }} </p>
      </div>
      <div class="p-8 space-y-2 shadow-md rounded-md border">
        <p v-for="item in nuxtClientLoggedData" :key="item.timestamp"> -- {{ item }} </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const serverFile = 'server-rpc.json'
const clientFile = 'client-rpc.json'

const nuxtServerLoggedData = ref([])
const nuxtClientLoggedData = ref([])

const getNuxtServerLoggedData = async () => {
  const { data, error } = await useFetch('/api/log/from-json?fileName=' + serverFile)
  console.log('data', data.value.body)
  if (error) {
    console.log('error', error)
    return
  }
  nuxtServerLoggedData.value = data.value.body
}

const getNuxtClientLoggedData = async () => {
  const { data, error } = await useFetch('/api/log/from-json?fileName=' + clientFile)
  if (error) {
    console.log('error', error)
    return
  }
  nuxtClientLoggedData.value = data
}

const testNuxtServer = async () => {
  const start = Date.now()
  const { data, error } = useApi('/api/tests/rpc')
  console.log('data', data)

  const duration = end - start

  // Log API call
  const logData = {
    fileName: serverFile,
    data: {
      duration
    }
  }
  // await useFetch('/api/log/to-json', { method: 'POST', body: JSON.stringify(logData) })
}

const testNuxtClient = async () => {
  const start = Date.now()
  const users = useUsers()
  await users.getManyUsers()
  const end = Date.now()

  const duration = end - start

  // Log API call
  const logData = {
    fileName: clientFile,
    data: {
      duration
    }
  }
  // await useAsyncData('item', () =>
  //   $fetch('/api/log/to-json', {
  //     method: 'POST',
  //     body: JSON.stringify(logData)
  //   })
  // )
}
</script>

<style scoped></style>
