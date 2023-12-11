<template>
  <NuxtLink :to="`/blog/${post.attributes.slug}`">
    <h1 class="px-5 text-center">{{ post.attributes.Title }}</h1>
    <LayoutMediaFocus
      :source="getStrapiUrl(post.attributes.Image)"
      :title="post.attributes.Title"
    />
  </NuxtLink>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>