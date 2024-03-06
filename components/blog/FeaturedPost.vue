<template>
  <NuxtLink :to="`/blog/${post.attributes.slug}`">
    <h1 class="px-5 text-center">{{ post.attributes.Title }}</h1>
    <LayoutMediaFocus
      :source="source.split('/')[2]"
      :title="post.attributes.Title"
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
const { attributes: { Image: { data: { attributes: { url: source } } } } } = post
console.debug('url: ', post.attributes.Image.data.attributes.url)
</script>