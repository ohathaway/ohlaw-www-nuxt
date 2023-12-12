<template>
  <div class="px-5 w-100 justify-content-center">
    <h2 class="text-center pt-5 pb-3">
      Articles Related to {{ toTitleCase(category, '-') }}
    </h2>
    <LayoutPostListRow :posts="posts" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const { params: { category } } = useRoute()

let {
  data: {
    value: {
      categories: {
        data: [{
          attributes: {
            posts: { data: posts }
          }
        }]
      }
    }
  }
} = await useAsyncQuery(categoryPostsQuery(toTitleCase(category, '-')))

console.debug(document.getElementById(category)) //.classList.add('active')
</script>