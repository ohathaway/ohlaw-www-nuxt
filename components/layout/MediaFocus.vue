<template>
  <div class="media-focus-wrapper py-4 px-md-5 border-right">
    <img
      class="w-100 border rounded-4"
      :src="src"
      :title="title"
    />
  </div>
</template>

<script setup>
const { source, title } = defineProps(['source', 'title'])
const src = computed(() => {
  return source.includes('https://')
    ? source
    : `/_nuxt${source}`
})
</script>