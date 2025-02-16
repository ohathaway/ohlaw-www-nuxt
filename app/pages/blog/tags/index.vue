<template>
  <h1>These are the tags</h1>
  <span
    v-for="tag in data.tags.data"
    class="badge rounded-pill text-bg-primary"
  >
    <NuxtLink
      :to="`/blog/tags/${tag.attributes.Name.replaceAll(' ', '-').toLowerCase()}`"
    >
      {{ tag.attributes.Name }}
    </NuxtLink>
  </span>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

definePageMeta({
  layout: 'blog'
})

const postsQuery = gql`
query {
  tags {
    data {
      id
      attributes {
        Name
      }
    }
  }
}`

const { data } = await useAsyncQuery(postsQuery)
</script>