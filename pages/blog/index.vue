<template>
  <div class="row">
    <div class="col-md-7">
      <LayoutMediaFocus source="/img/estatenotebook_1024_smallest.jpg" title="Life and Legacy Notebook" />
    </div>
    <div class="col-md-5">
      <LayoutPostListSidebar title="Spotlight" :posts="data.posts.data"/>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/blogStore'

definePageMeta({
  layout: 'blog'
})

const postsQuery = gql`
query {
  posts {
    data {
      id
      attributes {
        Title,
        Snippet,
        slug,
        tags {
          data {
            id,
              attributes {
              Name
            }
          }
        }
      }
    }
  }
}`


const { data } = await useAsyncQuery(postsQuery)
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>