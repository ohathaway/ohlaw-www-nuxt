<template>
  <div class="row">
    <div class="col-md-7">
      <BlogFeaturedPost :post="featuredPost"/>
    </div>
    <div class="col-md-5">
      <LayoutPostListSidebar title="Spotlight" :posts="spotlightPosts" />
    </div>
  </div>
  <LayoutPostListRow :posts="allPosts" />
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const {
  data: {
    value: {
      featuredPost: {
        data: {
          attributes: {
            post: { data: featuredPost }
          }
        }
      }
    }
  }
} = await useAsyncQuery(featuredPostQuery)

const {
  data: {
    value: {
      spotlight: {
        data: {
          attributes: {
            posts: {
              data: spotlightPosts 
            }
          }
        }
      }
    }
  }
} = await useAsyncQuery(spotlightPostsQuery)

const { data: { value: { posts: { data: allPosts } }} } = await useAsyncQuery(allPostsQuery)
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>