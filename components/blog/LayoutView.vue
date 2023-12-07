<template>
  <main class="main px-5">
    <BlogHeader />
    <RouterView />
  </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blogStore'

const { loadTags } = useBlogStore()
loadTags()
</script>

<style scoped>
main {
  min-height: 16rem;
}
</style>
