<template>
  <div class="media-focus-wrapper py-4 px-md-5 border-right">
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