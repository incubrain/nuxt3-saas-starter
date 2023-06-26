<template>
  <div>
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <BlogPost :post="post" />
    </div>
    <BlogToTop />
  </div>
</template>

<script setup lang="ts">
const params = useRoute().params

const post = ref({})
const category = ref(String(params.category))
const id = ref(Number(params.id))
console.log('article', category.value, id.value)

onBeforeMount(async () => {
  console.log('queryFire', category.value, id.value)
  post.value = await queryContent('blog', category.value)
    .where({ id: { $eq: id.value } })
    .findOne()
})
</script>

<style scoped>
pre code .line {
  white-space: normal;
}

.code-challenge {
  margin: 0;
  padding: 1.6rem;
  line-height: 1.6rem;
}

.code-challenge,
li {
  line-height: 2rem;
}

.code-challenge ol {
  margin: 30px 0;
}

.code-challenge h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1.6rem 0;
}

.code-challenge h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.4rem 0;
}

pre {
  margin-top: 1.6rem;
  background: black !important;
  border-radius: 8px;
  padding: 1rem;
}
</style>
