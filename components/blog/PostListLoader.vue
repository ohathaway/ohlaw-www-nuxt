<template>
  <Suspense>
    <BlogPostListView :tag-id="props.tagId"/>
    <template #fallback>
      Loading posts...
    </template>
  </Suspense>
</template>

<script setup>
import BlogPostListView from './BlogPostListView.vue'

const props = defineProps(['tagId'])
</script>