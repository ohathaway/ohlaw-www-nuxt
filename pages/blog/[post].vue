<template>
  <h1>This is the post {{ route.params.post }}</h1>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const route = useRoute()
</script>