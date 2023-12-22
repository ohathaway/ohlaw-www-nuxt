<template>
  <div class="card m-3">
    <a :href="`/blog/${post.attributes.slug}`">
      <img
        class="card-img-top object-fit-cover"
        :src="getStrapiUrl(post.attributes.Image)"
        :title="post.attributes.Title"
      />
    </a>
    <div class="card-body">
      <a :href="`/blog/${post.attributes.slug}`">
        <h3 class="card-title">{{ post.attributes.Title }}</h3>
        <p class="card-text">
          <BlogRichText :block="post.attributes.Snippet" />
        </p>
      </a>
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
  .card-text { color: #3a3a3a; }
  @media (max-width: 1025px) {
    height: auto;
    overflow: clip;
  }
}

/*
@media (max-width: 1025px) {
  .card-body {
    width: 225px;
  }
}
*/
</style>