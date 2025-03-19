<template>
  <div class="row post-title px-5">
    <div class="col-12 col-md-6 print-d-none">
      <LayoutMediaFocus
        :source="getStrapiUrl(post.attributes.Image)"
        :title="post.attributes.Title"
      />
    </div>
    <div class="col-12 col-md-6 d-flex align-items-center">
      <h1 class="pb-5">{{ post.attributes.Title }}</h1>
    </div>
  </div>
  <div class="row m-0 p-0">
    <div class="col-12 col-md-9 offset-md-3">
    <ul class="tags">
      <li
        v-for="tag in post.attributes.tags.data"
        class="tag me-3"
      >
        <span
          class="badge rounded-pill text-bg-primary text-light">
          <NuxtLink
            :to="`/blog/tags/${tag.attributes.slug}`"
          >
            {{ tag.attributes.Name }}
          </NuxtLink>
        </span>
      </li>
    </ul>
    </div>
  </div>
  <article class="row px-5 pb-5 post-display">
    <div class="col-3 d-none d-lg-block">
      <div class="sticky-sidebar">
        <BlogTOC :content="post.attributes.Content" />
      </div>
    </div>
    <div class="col-12 col-md-8 col-lg-6">
      <span class="fst-italic fs-5">{{ formatDateFull(post.attributes.publishDate) }}</span>
      <BlogRichText
        :block="post.attributes.Content"
      />
      <BlogRichText
        :block="post.attributes.CTA"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-3">
      <div class="sticky-sidebar">
        <LayoutPostListSidebar
          title="Related Articles"
          :posts="relatedPosts"
        />
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
   value: 
    { posts: 
      { data: [post] }
    }
  }
} = await useAsyncQuery(singlePostQuery(path.split('/').pop()))

/*
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
*/
const category = post?.attributes?.category?.data?.attributes?.Name ?? 
                post?.category?.Name ?? 
                'Uncategorized'

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