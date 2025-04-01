<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
    <div v-for="post in posts" class="col">
      <BlogCard :post="post" />
    </div>
  </div>
</template>

<script setup>
const { posts } = defineProps({
  posts: Object
})
</script>