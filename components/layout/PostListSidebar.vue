<template>
  <aside class="p-4">
    <div class="post-list-wrapper">
      <div class="list-title pb-4 border-bottom">
        <h3>{{ props.title }}</h3>
      </div>
      <div class="list-entries pt-3">
        <div class="entry" v-for="entry in entries.items">
          <div class="entry-wrapper row ms-0 pb-3 border-bottom">
            <div class="col-8">
              <span class="badge rounded-pill text-bg-primary">
                <RouterLink
                  :to="{ name: 'BlogPostsForTag', params: { tagId: entry.metadata.tags[0].sys.id }}"
                >
                  {{ getTagName(entry.metadata.tags[0].sys.id, tags) }}
                </RouterLink>
              </span>
                <RouterLink :to="{ name: 'BlogPost', params: { id: entry.sys.id }}">
                  <h4>{{  entry.fields.title }}</h4>
                </RouterLink>
                {{ formatDateFull(entry.sys.updatedAt) }}
            </div>
            <div class="col-4">
              <RouterLink :to="{ name: 'BlogPost', params: { id: entry.sys.id }}">
                <MediaListing
                  :source="entry.fields.image.fields.file.url"
                  :title="entry.fields.image.fields.title"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { client } from '@/apis/contentful'
import { useBlogStore } from '@/stores/blogStore'
import { formatDateFull } from '@/composables/dates'
import { getTagName } from '@/apis/contentful'
import MediaListing from '@/components/layout/MediaListing.vue'

const props = defineProps(['title'])

const { tags } = storeToRefs(useBlogStore())
const entries = await client.getEntries()
console.debug('entries: ', entries)
</script>

<style scoped>
a { text-decoration: none; }
a:hover { text-decoration: underline; }

.badge.text-bg-primary a {
  color: #ffffff;
}
.list-title h3 {
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>