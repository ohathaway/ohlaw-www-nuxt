<template>
  <aside>
    <BlogPostList 
      :title="title"
    />
  </aside>
</template>

<script setup>
const { title } = defineProps(['title'])
</script>