<template>
  <div class="row post-title px-5">
    <div class="col-12 col-md-6 print-d-none">
      <LayoutMediaFocus
        :source="getStrapiUrl(post.Image)"
        :title="post.Title"
      />
    </div>
    <div class="col-12 col-md-6 d-flex align-items-center">
      <h1 class="pb-5">{{ post.Title }}</h1>
    </div>
  </div>
  <div class="row m-0 p-0">
    <div class="col-12 col-md-9 offset-md-3">
    <ul class="tags">
      <li
        v-for="tag in post.tags"
        class="tag me-3"
      >
        <span
          class="badge rounded-pill text-bg-primary text-light">
          <NuxtLink
            :to="`/blog/tags/${tag.slug}`"
          >
            {{ tag.Name }}
          </NuxtLink>
        </span>
      </li>
    </ul>
    </div>
  </div>
  <article class="row px-5 pb-5 post-display">
    <div class="col-3 d-none d-lg-block">
      <div class="sticky-sidebar">
        <BlogTOC :content="post.Content" />
      </div>
    </div>
    <div class="col-12 col-md-8 col-lg-6">
      <span class="fst-italic fs-5">{{ formatDateFull(post.publishDate) }}</span>
      <BlogRichText
        :block="post.Content"
      />
      <BlogRichText
        :block="post.CTA"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-3">
      <div class="sticky-sidebar">
        <ClientOnly>
          <LayoutPostListSidebar
            title="Related Articles"
            :posts="getMultipleRandom(relatedPosts, 5)"
          />
        </ClientOnly>
      </div>
    </div>
  </article>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const { path } = useRoute()

const {
  data: {
   value: { posts: [post] }
  }
} = await useAsyncQuery(singlePostQuery(path.split('/').pop()))

const category = post?.category?.Name ?? 
                post?.category?.Name ?? 
                'Uncategorized'

const restQuery = categoryPostsQueryREST(category)
const fetchUrl = ref(`https://strapi.ohlawcolorado.com/api/categories?${restQuery}`)
const {
  data: {
    value: {
      data: [
        { posts: relatedPosts }
      ]
    }
  }
} = await useLazyFetch(fetchUrl.value)

relatedPosts.value = relatedPosts.filter(relatedPost => {
  return relatedPost.documentId !== post.documentId
})

const { href: fullPath  } = useRequestURL()

const description = richTextToPlainText(post.Snippet)

useHead({
  title: post.Title,
  meta: [
    { hid: 'og:title', property: 'og:title', content: post.Title },
    { hid: 'og:url', property: 'og:url', content: fullPath },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: `${process.env.baseUrl}/${getStrapiUrl(post.Image)}` }
  ]
})

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  articleModifiedTime: getDateAsPaddedString(post.updatedAt)
})

if (isEmpty(post)) {
  showError({'404': 'Page not found'})
}
</script>

<style lang="scss">
ul.tags { list-style-type: none; }
li.tag { 
  display: inline;
  a { color: #f8f8f8;}
} 

@media print {
  .post-list-wrapper {
    display: none;
  }
}
</style>