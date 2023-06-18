<template>
  <div>
    <div>
      <UInput v-model="query" placeholder="Filter people..." class="p-4" />
      <AppToast id="123" title="Hello World" description="I am awesome and can be used for so many things....">
        Test Notification
      </AppToast>
    </div>
    <UTable v-model="selected" :rows="filteredRows" :columns="columns">
      <template #name-data="{ row }">
        <span
          :class="[
            selected.find((person) => person.id === row.id) &&
              'text-primary-500 dark:text-primary-400'
          ]"
        >
          {{ row.name }}
        </span>
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
  </div>
</template>

<script setup>
const columns = [
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'title',
    label: 'Title',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    direction: 'desc'
  },
  {
    key: 'role',
    label: 'Role'
  },
  {
    key: 'actions'
  }
]

const people = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
  },
  {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member'
  },
  {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin'
  },
  {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner'
  },
  {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member'
  }
]

const items = (row) => [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row.id)
    },
    {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid'
    }
  ],
  [
    {
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid'
    },
    {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid'
    }
  ],
  [
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }
  ]
]

const query = ref('')

const filteredRows = computed(() => {
  if (!query.value) {
    return people
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(query.value.toLowerCase())
    })
  })
})

const selected = ref([people[1]])
</script>
