<template>
  <div class="row">
    <div class="col-3">
      <BlogTOC :content="post.attributes.Content" />
    </div>
    <div class="col-6">
      <h1 class="pb-5">{{ post.attributes.Title }}</h1>
      <BlogRichText
        :block="post.attributes.Content"
      />
      <BlogRichText
        :block="post.attributes.CTA"
      />
    </div>
    <div class="col-3">
      <p>list of related posts</p>
    </div>
  </div>
</template>

<script setup>
import { isEmpty } from 'lodash'

definePageMeta({
  layout: 'blog'
})

const { path } = useRoute()

const query = gql`
query {
  posts(filters: { slug: { eq: "${path.split('/').pop()}"}}) {
    data {
      id,
      attributes {
        Content,
        CTA,
        publishedAt,
        Title,
        category {
          data {
            id,
            attributes{
              Name
            }
          }
        },
        tags {
          data {
            id,
            attributes {
              Name
            }
          }
        }
      }
    }
  }
}`

const {
  data: {
   value: 
    { posts: 
      { data: [post] }
    }
  }
} = await useAsyncQuery(query)
if (isEmpty(post)) {
  showError({'404': 'Page not found'})
}
</script>