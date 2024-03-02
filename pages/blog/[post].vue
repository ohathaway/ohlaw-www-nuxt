<template>
  <div class="row post-title px-5">
    <div class="col-12 col-md-6">
      <LayoutMediaFocus
        :source="getStrapiUrl(post.attributes.Image)"
        :title="post.attributes.Title"
      />
    </div>
    <div class="col-12 col-md-6 d-flex align-items-center">
      <h1 class="pb-5">{{ post.attributes.Title }}</h1>
    </div>
  </div>
  <div class="row p-5 post-display">
    <div class="col-3 d-none d-lg-block">
      <BlogTOC :content="post.attributes.Content" />
    </div>
    <div
      class="col-12 col-md-8 col-lg-6"
      data-bs-spy="scroll"
      data-bs-target="#toc"
      data-bs-smooth-scroll="true"
    >
      <span class="fst-italic fs-5">{{ formatDateFull(post.attributes.publishDate) }}</span>
      <BlogRichText
        :block="post.attributes.Content"
      />
      <BlogRichText
        :block="post.attributes.CTA"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-3">
      <div class="position-lg-sticky top-0">
        <LayoutPostListSidebar
          title="Related Articles"
          :posts="relatedPosts"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const { path } = useRoute()

const {
  data: {
   value: 
    { posts: 
      { data: [post] }
    }
  }
} = await useAsyncQuery(singlePostQuery(path.split('/').pop()))

const {
  attributes: {
    category: {
      data: {
        attributes: {
          Name: category
        }
      }
    }
  }
} = post

let {
  data: {
    value: {
      categories: {
        data: [{
          attributes: {
            posts: { data: relatedPosts }
          }
        }]
      }
    }
  }
} = await useAsyncQuery(categoryPostsQuery(category))

relatedPosts = relatedPosts.filter(relatedPost => {
  return relatedPost.id !== post.id
})

const { href: fullPath  } = useRequestURL()

const description = richTextToPlainText(post.attributes.Snippet)

useHead({
  title: post.attributes.Title,
  meta: [
    { hid: 'og:title', property: 'og:title', content: post.attributes.Title },
    { hid: 'og:url', property: 'og:url', content: fullPath },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: `${process.env.baseUrl}/${getStrapiUrl(post.attributes.Image)}` }
  ]
})

if (isEmpty(post)) {
  showError({'404': 'Page not found'})
}
</script>

<style lang="scss">
.post-title {
  background: #d8d8d8;
}
</style>