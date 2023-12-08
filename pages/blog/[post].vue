<template>
  <div class="row">
    <div class="col-3">
      <BlogTOC :content="data.post.data.attributes.Content" />
    </div>
    <div class="col-6">
      <h1 class="pb-5">{{ data.post.data.attributes.Title }}</h1>
      <BlogRichText
        :block="data.post.data.attributes.Content"
        :closing="data.post.data.attributes.Closing"
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

const route = useRoute()

const query = gql`
query {
  post(id:1) {
    data {
      id,
      attributes {
        Content,
        Closing,
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

const { data } = await useAsyncQuery(query)
</script>