<template>
  <div class="post-list-wrapper">
    <div class="list-title pb-4 border-bottom">
      <h3>{{ title }}</h3>
    </div>
    <div class="list-entries pt-3">
      <div class="entry" v-for="post in posts">
        <div class="entry-wrapper ms-0 py-3 border-bottom">
          <span class="fst-italic fs-5">
            {{ formatDateFull(post.attributes.publishDate) }}
          </span>
          <div class="row">
            <div class="col-12 col-lg-8">
              <NuxtLink
                :to="`/blog/${post.attributes.slug}`"
              >
                <h4>{{  post.attributes.Title }}</h4>
              </NuxtLink>
              <span
                v-for="tag in post.attributes.tags.data"
                class="badge rounded-pill text-bg-primary">
                <NuxtLink
                  :to="`/blog/tags/${tag.attributes.slug}`"
                >
                  {{ tag.attributes.Name }}
                </NuxtLink>
              </span>
            </div>
            <div class="col-4 d-none d-lg-block">
              <NuxtLink
                :to="`/blog/${post.attributes.slug}`"
              >
                <LayoutMediaListing
                  :source="getStrapiThumbnailUrl(post.attributes.Image)"
                  :title="post.attributes.Title"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="row" v-if="snippet">
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
const { posts, snippet, title } = defineProps({
  posts: Array,
  snippet: Boolean,
  title: String
})
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