<template>
  <div v-if="post.title">
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <ContentRenderer :value="post">
        <div class="my-10 lg:my-10 flex flex-col justify-center">
          <NuxtImg
            :src="post.featured_image"
            width="600"
            height="360"
            class="rounded-xl shadow-xl object-cover mx-auto"
          />
          <h1 class="text-4xl lg:text-6xl leading-10 text-center">
            {{ post.title }}
          </h1>
          <div class="flex flex-row gap-2 items-center justify-center">
            <p class="font-semibold"> Published: {{ post.published }} </p>
            <p class="font-semibold"> Updated: {{ post.updated }} </p>
          </div>
          <div class="flex flex-row gap-2 items-center justify-center">
            <p class="font-semibold"> Author: {{ post.author }} </p>
            <span>
              Contributors:
              <span v-for="(con, index) in post.contributors" :key="con" class="font-semibold">
                {{ post.contributors.length - 1 === index ? con : `${con}, ` }}
              </span>
            </span>
            <span>
              Tags:
              <UBadge size="md" v-for="tag in post.tags" :key="tag" class="font-semibold">
                {{ tag }}
              </UBadge>
            </span>
            <span>
              Category:
              <UBadge size="md" class="font-semibold">
                {{ post.category }}
              </UBadge>
            </span>
          </div>
        </div>
        <div class="max-w-[920px] mx-auto">
          <ContentRendererMarkdown :value="post.body">
            <p class="m-0">
              {{ post.body }}
            </p>
          </ContentRendererMarkdown>
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true
  }
})

definePageMeta({
  name: 'BlogPost',
  layout: 'blog'
})
</script>
