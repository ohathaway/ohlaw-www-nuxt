
import type { BlogRichText } from '#build/components'
<template>
  <div class="card m-3">
    <img
      class="card-img-top object-fit-cover"
      :src="getStrapiUrl(post.attributes.Image)"
      :title="post.attributes.Title"
    />
    <div class="card-body">
      <h3 class="card-title">{{ post.attributes.Title }}</h3>
      <p class="card-text">
        <BlogRichText :block="post.attributes.Snippet" />
      </p>
    </div>
  </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style lang="scss" scoped>
.card-img-top { height: 300px; }
.card-body {
  height: 400px;
  overflow: auto;
}
</style>