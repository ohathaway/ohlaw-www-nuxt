<template>
  <div class="row">
    <div v-for="post in posts" class="col-4">
      <BlogCard :post="post" />
    </div>
  </div>
</template>

<script setup>
const posts = inject('allPosts')
</script>