<template>
  <div class="media-listing-wrapper p-2">
    <img
      class="w-100 border rounded-4"
      :src="props.source"
      :title="props.title"
    />
  </div>
</template>

<script setup>
const props = defineProps(['source', 'title'])
</script>