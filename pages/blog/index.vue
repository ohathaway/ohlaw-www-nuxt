<template>
  <div class="row">
    <div class="col-md-7">
      <LayoutMediaFocus source="/img/estatenotebook_1024_smallest.jpg" title="Life and Legacy Notebook" />
    </div>
    <div class="col-md-5">
      <LayoutPostListSidebar title="Spotlight"/>
    </div>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import { useBlogStore } from '@/stores/blogStore'

const store = useBlogStore()

definePageMeta({
  layout: 'blog'
})

const postsQuery = gql`
query {
  posts(sort: "publishedAt:ASC") {
    data {
      id
      attributes {
        Title,
        Snippet,
        Image {
          data {
            attributes {
              name
              url
            }
          }
        },
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
store.posts.value = data.value.posts.data
provide('posts', data)
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>