<template>
  <div class="px-5 w-100 justify-content-center">
    <h2 class="text-center pt-5 pb-3">
      Articles Related to {{ toTitleCase(tag, '-') }}
    </h2>
    <LayoutPostListRow v-if="!isEmpty(posts)" :posts="posts" />
    <p v-else class="text-center">No articles found</p>
  </div>
</template>

<script setup>
import { isEmpty } from 'lodash'

definePageMeta({
  layout: 'blog'
})

const { params: { tag } } = useRoute()

let {
  data: {
    value: {
      tags: {
        data: [{
          attributes: {
            posts: { data: posts }
          }
        }]
      }
    }
  }
} = await useAsyncQuery(tagPostsQuery(tag))
console.debug('posts: ', posts)
</script>