<template>
  <main class="p-5" v-if="tags.length > 0">
    <h3>{{ getTagName(props.tagId, tags) }}</h3>
    <div class="row border-bottom mb-5" v-for="entry in posts.entries">
      <PostItemListing :entry="entry" />
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blogStore'
import { getEntriesFromTag, getTagName } from '@/apis/contentful'
import PostItemListing from '@/components/layout/PostItemListing.vue'

const props = defineProps(['tagId'])

const { tags } = storeToRefs(useBlogStore())

const posts = await getEntriesFromTag(props.tagId, tags.value)
console.debug('posts: ', posts)
</script>