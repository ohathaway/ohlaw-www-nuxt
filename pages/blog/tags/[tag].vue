<template>
  <h1>This is the page listing posts tagged as {{ route.params.tag }}</h1>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const route = useRoute()
</script>