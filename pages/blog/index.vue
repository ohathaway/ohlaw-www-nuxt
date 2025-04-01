<!-- pages/blog/index.vue -->
<template>
  <div class="row py-3 p-lg-5">
    <div class="col-md-7">
      <BlogFeaturedPost :post="featuredPost"/>
    </div>
    <div class="col-md-5 d-flex align-items-center">
      <LayoutPostListSidebar title="Spotlight" :posts="spotlightPosts" />
    </div>
  </div>
  <!-- <BlogSignup /> -->
  <div class="p-md-5">
    <LayoutPostListRow :posts="allPostsREST" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const {
  data: {
    value: {
      featuredPost: {
        post: featuredPost 
      }
    }
  }
} = await useAsyncQuery(featuredPostQuery)

let {
  data: {
    value: {
      spotlight: {
        posts: spotlightPosts 
      }
    }
  }
} = await useAsyncQuery(spotlightPostsQuery)
spotlightPosts = dedupPosts(spotlightPosts)

let {
  data: {
    value: {
      posts: allPosts
    }
  }
} = await useAsyncQuery(allPostsQuery)
const fetchUrl = allPostsQueryREST(9)
const { strapiUrl } = useAppConfig()
const { data: { value: { data: allPostsREST } } } = await useLazyFetch(`${strapiUrl}/api/posts?${fetchUrl}`)
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>