<template>
  <div class="col-7">
    <RouterLink :to="{ name: 'BlogPost', params: { id: entry.sys.id } }">
      <h4>{{ entry.fields.title }}</h4>
    </RouterLink>
  </div>
  <div class="col-5">
    <RouterLink :to="{ name: 'BlogPost', params: { id: entry.sys.id } }">
      <MediaListing
        :source="entry.fields.image.fields.file.url"
        :title="entry.fields.image.fields.title"
      />
    </RouterLink>
  </div>
</template>

<script setup>
import MediaListing from './MediaListing.vue'

const { entry } = defineProps(['entry'])
</script>