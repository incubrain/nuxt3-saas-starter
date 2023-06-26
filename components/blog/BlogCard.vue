<template>
  <div v-for="post in posts" :key="post.id">
    <NuxtLink :to="`/${p.baseFolder}/${post.category}/${post.id}`">
      <div
        class="relative w-full h-full rounded-md foreground hover:bg-[#F9FAFB] hover:shadow-md cursor-pointer flex flex-col gap-2 p-4 overflow-hidden"
      >
        <!-- :alt="post.meta.featured_alt" -->
        <NuxtImg
          class="w-full object-cover rounded-md"
          :src="post.featured_image"
          width="400"
          height="400"
        />
        <div class="flex flex-col gap-2 items-start w-full justify-center">
          <h3 class="text-md lg:text-2xl font-bold">
            {{ post.title }}
          </h3>
          <div
            class="flex flex-row gap-2 lg:gap-3 justify-center items-center font-semibold text-[#333c7d]"
          >
            <p>{{ post.updated }}</p>
            <UBadge size="md">
              {{ post.category }}
            </UBadge>
            <!-- <div class="w-1 h-1 rounded-full bg-black" /> -->
          </div>
          <p class="hidden xl:flex text-sm">
            {{ post.excerpt }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const p = defineProps({
  baseFolder: {
    type: String,
    default: 'blog'
  },
  category: {
    type: String,
    default: 'all'
  }
})

const posts = ref()

if (p.category === 'all') {
  posts.value = await queryContent(p.baseFolder).skip(0).limit(10).find()
} else {
  posts.value = await queryContent(p.baseFolder, p.category).skip(0).limit(10).find()
}
</script>
