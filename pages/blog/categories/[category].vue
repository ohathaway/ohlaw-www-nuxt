<template>
  <div class="category-page">
    <!-- Hero Section with Rich Text and Image -->
    <section v-if="categoryData && categoryData.hero" class="bg-light py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 pe-lg-5">
            <h1 class="fw-bold mb-4 position-relative">
              {{ toTitleCase(category, '-') }}
              <span class="d-block position-absolute bg-primary" style="height: 3px; width: 70px; bottom: -10px; left: 0;"></span>
            </h1>
            <BlogRichText :block="categoryData.hero" />
          </div>
          <div class="d-none d-lg-inline col-lg-5">
            <div class="d-flex align-items-center justify-content-center" style="min-height: 400px;">
              <LayoutMediaFocus 
                v-if="categoryData.Image"
                :source="getStrapiUrl(categoryData.Image)"
                provider="strapi"
                :title="toTitleCase(category, '-') + ' Category'"
                class="rounded overflow-hidden shadow"
              />
              <!-- Fallback if no image -->
              <div v-else class="rounded overflow-hidden shadow">
                <img src="/img/placeholder_1024.webp" alt="Category placeholder" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Section -->
    <section class="py-5 mt-3">
      <div class="container">
        <h2 class="text-center mb-4">
          {{ toTitleCase(category, '-') }} <span v-if="category === 'being-human'"> - as if you needed the practice</span>
        </h2>
        <ClientOnly>
          <LayoutPostListRow :posts="posts" />
        </ClientOnly>
      </div>
    </section>

    <!-- FAQ Section (if available) -->
    <section v-if="categoryData && categoryData.faq && categoryData.faq.length" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <FaqAccordion :faqItems="categoryData.faq" />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const { params: { category } } = useRoute()
const categoryData = ref(null)

const restQuery = postListQueryREST(category)
const { strapiUrl } = useAppConfig()
const fetchUrl = ref(`${strapiUrl}/api/categories?${restQuery}`)
const { data: categoryResponseREST } = await useFetch(fetchUrl.value)

// Extract category data if it exists
if (categoryResponseREST.value.data.length > 0) {
  // console.debug('extracting category data...')
  categoryData.value = categoryResponseREST.value.data[0]
}

const posts = ref(dedupPosts(categoryResponseREST?.value?.data[0]?.posts))

// Meta tags for SEO
useHead({
  title: `${toTitleCase(category, '-')} Articles | OH Law`,
  meta: [
    { name: 'description', content: `Browse our collection of ${toTitleCase(category, '-')} articles and resources.` }
  ]
})
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
  .category-image-container {
    margin-top: 2rem !important;
    min-height: 300px !important;
  }
}
</style>