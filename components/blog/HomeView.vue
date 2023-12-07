<template>
  <div class="row">
    <div class="col-md-7">
      <MediaFocus source="/img/estatenotebook_1024_smallest.jpg" title="Life and Legacy Notebook" />
    </div>
    <div class="col-md-5">
      <Suspense>
        <PostListSidebar title="Spotlight" />
        <template #fallback>
          Loading blog posts...
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import MediaFocus from '@/components/layout/MediaFocus.vue'
import PostListSidebar from '@/components/layout/PostListSidebar.vue'
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>
