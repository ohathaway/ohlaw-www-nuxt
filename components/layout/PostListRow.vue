<template>
  <div class="row justify-content-center">
    <div v-for="post in posts" :class="`col-12 col-lg-${col}`">
      <BlogCard :post="post" />
    </div>
  </div>
</template>

<script setup>
const { posts } = defineProps({
  posts: Object,
  col: {
    type: Number,
    default: 4
  }
})
</script>