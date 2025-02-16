import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('blog', () => {
  const post = ref()
  const posts = ref([])
  const tags = ref([])

  const loadTags = async () => {
    /*
    const tagsResponse = await client.getTags()
    tags.value = tagsResponse.items.map(item => {
      return {
        name: item.name,
        id: item.sys.id
      }
    })
    */
    return true
  }

  return { loadTags, post, posts, tags }
})