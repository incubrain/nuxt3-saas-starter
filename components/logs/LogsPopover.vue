<template>
  <div class="absolute bottom-2 left-2">
    <UPopover class="w-full">
      <UButton color="white" label="Logs" trailing-icon="i-heroicons-chevron-up-20-solid" />
      <template #panel>
        <div class="w-full background overflow-hidden">
          <div class="p-4 flex gap-2 justify-between">
            <h4>Server Logs:</h4>
            <UButton @click="refreshLogs">Refresh</UButton>
          </div>
          <div class="w-full shadow-md border border-color h-full overflow-hidden rounded-b-md">
            <UTable :rows="serverLogs" :columns="columns" :sort="{ column: 'timestamp', direction: 'desc' }" class="relative h-[60vh] overflow-scroll" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">

const env = useRuntimeConfig().public
const serverFile = env.LOG_ENV === 'development' ? 'server.json' : 'log-batch'
const serverLogs = ref([])

const { data } = await useFetch(`/api/storage/get/${serverFile}`)
if (data.value !== null) {
  serverLogs.value = data.value.body
}

const refreshLogs = async () => {
  console.log('fileName:', serverFile)
  const { data, error } = await useFetch(`/api/storage/get/${serverFile}`)
  console.log('data', data)
  if (error.value !== null) {
    console.log('error', error)
    return
  }
  serverLogs.value = data.value.body
}

const columns = [
  {
    key: 'timestamp',
    label: 'Timestamp',
    sortable: true
  },
  {
    key: 'method',
    label: 'Method',
    sortable: true
  },
  {
    key: 'path',
    label: 'Path',
    sortable: true
  },
  {
    key: 'referer',
    label: 'Referer',
    sortable: true
  },
  {
    key: 'responseTime',
    label: 'Response Time',
    sortable: true
  },
  {
    key: 'statusCode',
    label: 'Status Code',
    sortable: true
  },
  {
    key: 'startTime',
    label: 'Start Time'
  },
  {
    key: 'error',
    label: 'Error',
    sortable: true
  }
]

</script>

<style scoped></style>
