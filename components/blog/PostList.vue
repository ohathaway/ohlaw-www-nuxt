<template>
  <div class="post-list-wrapper">
    <div class="list-title pb-4 border-bottom">
      <h3>{{ title }}</h3>
    </div>
    <div class="list-entries pt-3">
      <div class="entry" v-for="post in posts">
        <div class="entry-wrapper ms-0 py-3 border-bottom">
          <div class="row">
            <div class="col-8">
              <NuxtLink
                :to="`/blog/${post.attributes.slug}`"
              >
                <h4>{{  post.attributes.Title }}</h4>
              </NuxtLink>
              <span
                v-for="tag in post.attributes.tags.data"
                class="badge rounded-pill text-bg-primary">
                <NuxtLink
                  :to="`/blog/tags/${tag.attributes.Name}`"
                >
                  {{ tag.attributes.Name }}
                </NuxtLink>
              </span>
            </div>
            <div class="col-4">
              <NuxtLink
                :to="`/blog/${post.attributes.slug}`"
              >
                <LayoutMediaListing
                  :source="`${strapiUrl}${getThumbnailUrl(post.attributes.Image.data.attributes.url)}`"
                  :title="post.attributes.Title"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <BlogRichText :block="post.attributes.Snippet" />
              <NuxtLink :to="`/blog/${post.attributes.slug}`">
                read more...
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const { title } = defineProps(['title'])

const posts = inject('posts')

const { public: { strapi: { url: strapiUrl } } } = useRuntimeConfig()
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.badge.text-bg-primary a {
  color: #ffffff;
}

.list-title h3 {
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}</style>