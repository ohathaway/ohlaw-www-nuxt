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
    <LayoutPostListRow :posts="allPosts" />
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

const {
  data: {
    value: {
      posts: {
        data: allPosts
      }
    }
  }
} = await useAsyncQuery(allPostsQuery)

console.debug('featuredPost: ', featuredPost)
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>