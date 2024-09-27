<template>
  <div class="media-focus-wrapper py-4 px-md-5 border-right">
    <NuxtImg
      class="w-100 border rounded-4"
      :provider="provider"
      :src="src"
      :title="title"
    />
  </div>
</template>

<script setup>
const { provider, source, title } = defineProps({
  provider: {
    type: String,
    default: 'strapi'
  },
  source: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

const src = computed(() => {
  const isUrl =  source.includes('https://')
  const isAbsolute = source.startsWith('/')
  console.debug(`${source} isUrl? ${isUrl}`)
  return isUrl || isAbsolute
    ? source
    : `/${source}`
})
</script>