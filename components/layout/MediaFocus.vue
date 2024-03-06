<template>
  <div class="media-focus-wrapper py-4 px-md-5 border-right">
    <NuxtImg
      class="w-100 border rounded-4"
      provider="cloudflare"
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
    : `/${source}`
})
</script>