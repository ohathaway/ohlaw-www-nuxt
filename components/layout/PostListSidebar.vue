<template>
  <aside class="p-4">
    <div class="post-list-wrapper">
      <div class="list-title pb-4 border-bottom">
        <h3>{{ props.title }}</h3>
      </div>
      <div class="list-entries pt-3">
        <div class="entry" v-for="post in posts">
          <div class="entry-wrapper row ms-0 pb-3 border-bottom">
            <div class="col-8">
              <span
                v-for="tag in post.attributes.tags.data"
                class="badge rounded-pill text-bg-primary">
                <NuxtLink
                  :to="`blog/tags/${tag.attributes.Name}`"
                >
                  {{ tag.attributes.Name }}
                </NuxtLink>
              </span>
                <NuxtLink
                  :to="`blog/${post.attributes.slug}`"
                  @click="getPost(post.id)"
                >
                  <h4>{{  post.attributes.Title }}</h4>
                </NuxtLink>
                {{ post.attributes.Snippet }}
                <NuxtLink :to="`blog/${post.attributes.slug}`">
                  read more...
                </NuxtLink>
            </div>
            <!-- <div class="col-4"> -->
              <!-- <NuxtLink :to="{ name: 'BlogPost', params: { id: entry.sys.id }}"> -->
                <!-- <LayoutMediaListing -->
                  <!-- :source="entry.fields.image.fields.file.url" -->
                  <!-- :title="entry.fields.image.fields.title" -->
                <!-- /> -->
              <!-- </NuxtLink> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blogStore'

const props = defineProps(['title', 'posts'])
const blogStore = useBlogStore()


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