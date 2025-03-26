<template>
  <NuxtLink :to="`/blog/${post.slug}`">
    <h1 class="px-5 text-center">{{ post.Title }}</h1>
    <LayoutMediaFocus
      :source="source.split('/')[2]"
      :title="post.Title"
    />
    <!--
    <LayoutMediaFocus
      :source="getStrapiUrl(post.attributes.Image)"
      :title="post.attributes.Title"
    />
    -->
  </NuxtLink>
</template>

<script setup>
const { post } = defineProps(['post'])
const { Image: { url: source } } = post
</script>