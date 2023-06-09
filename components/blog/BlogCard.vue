<template>
  <li 
    :class="[
      'w-full rounded-md border foreground',
      'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
      'transition duration-100',
      'motion-reduce:hover:scale-100',
      'animate-shadow',
      className
    ]"
    @click="onClick"
  >
    <nuxt-link
      class="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      :to="`/blog/${post.slug}`"
    >
      <div class="relative">
        <!-- CloudinaryImg component code here -->
        <div
          :class="[
            'absolute bottom-0 w-full px-4 py-2',
            'mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm'
          ]"
        >
          <Tag
            v-for="tag in post.tags.split(',')"
            :key="tag"
            class="bg-opacity-80 dark:!bg-opacity-60"
            :tabindex="-1"
          >
            <Accent v-if="checkTagged?.(tag)">{{ tag }}</Accent>
            <template v-else>{{ tag }}</template>
          </Tag>
        </div>
      </div>
      <div class="p-4">
        <h4 class="">{{ post.title }}</h4>
        <div class="mt-2 flex items-center justify-start gap-2 text-sm font-medium">
          <div class="flex items-center gap-1">
            <HiOutlineClock class="inline-block text-base" />
            <Accent>{{ post.readingTime.text }}</Accent>
          </div>
          <div class="flex items-center gap-1">
            <HiOutlineEye class="inline-block text-base" />
            <Accent>{{ post?.views?.toLocaleString() ?? '–––' }} views</Accent>
          </div>
        </div>
        <p class="mb-2 mt-4 text-sm">
          <span class="font-bold ">
            {{ formatDate(post.lastUpdated ?? post.publishedAt) }}
          </span>
        </p>
        <p class="text-sm">
          {{ post.description }}
        </p>
      </div>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

const post = ref({})
const className = ref('')
const checkTagged = ref((tag) => false)
const onClick = ref(() => {})

const formatDate = (dateString) => format(new Date(dateString), 'MMMM dd, yyyy')

// Other setup script code here
</script>
