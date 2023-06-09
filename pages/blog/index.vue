<template>
  <Layout>
    <Seo
      :templateTitle="frontmatter.title"
      :description="frontmatter.description"
      isBlog
      :banner="OG_BANNER_LINK"
      :date="new Date(frontmatter.lastUpdated ?? frontmatter.publishedAt).toISOString()"
      :canonical="frontmatter.repost"
    />

    <main>
      <!-- The rest of your template code -->
    </main>
  </Layout>
</template>

<script setup lang="ts">

const route = useRoute()

let frontmatter = ref(null)
let recommendations = ref(null)

async function fetchData() {
  const slug = route.params.slug
  const post = await fetch(`/api/blog/${slug}`).then((res) => res.json())
  frontmatter.value = post.frontmatter
  recommendations.value = await fetch(`/api/blog/recommendations/${slug}`).then((res) => res.json())
}

onMounted(fetchData)
</script>
