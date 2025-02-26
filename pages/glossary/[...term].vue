<template>
  <main class="main container py-5">
    <!-- Back to Glossary -->
    <NuxtLink to="/glossary" class="btn btn-outline-secondary mb-4">
      <i class="bi bi-arrow-left"></i> Back to Glossary
    </NuxtLink>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error }}
      <div class="mt-3">
        <NuxtLink to="/glossary" class="btn btn-primary">Return to Glossary</NuxtLink>
      </div>
    </div>

    <!-- Term Content -->
    <div v-else-if="term" class="row">
      <div class="term-content bg-white p-4 rounded shadow-sm col-lg-9">
        <h1 class="mb-3">{{ term.title }}</h1>
        
        <!-- Related categories if any -->
        <div v-if="term.categories && term.categories.length > 0" class="mb-3">
          <span class="text-muted me-2">Tags:</span>
          <span 
            v-for="(category, index) in term.categories" 
            :key="category.id" 
            class="badge bg-secondary me-1"
          >
            {{ category.name }}
          </span>
        </div>
        
        <!-- Definition -->
        <div class="definition mb-4">
          <p class="lead">{{ term.definition }}</p>
        </div>
        
        <!-- Expanded description if available -->
        <div v-if="term.description" class="description mb-4">
          <div v-html="term.description"></div>
        </div>

        <!-- Related Terms if any -->
        <div v-if="term.relatedTerms && term.relatedTerms.length > 0" class="related-terms mt-5">
          <h3 class="h5 mb-3">Related Terms</h3>
          <ul class="list-unstyled row">
            <li v-for="relatedTerm in term.relatedTerms" :key="relatedTerm.id" class="col-md-4 mb-2">
              <NuxtLink :to="`/glossary/${relatedTerm.slug}`" class="text-decoration-none">
                <i class="bi bi-link-45deg"></i> {{ relatedTerm.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Related Articles if any -->
        <div v-if="term.relatedArticles && term.relatedArticles.length > 0" class="related-articles mt-5">
          <h3 class="h5 mb-3">Related Articles</h3>
          <ul class="list-unstyled">
            <li v-for="relatedArticle in term.relatedArticles" :key="relatedArticle.slug" class="mb-2">
              <NuxtLink :to="`/blog/${relatedArticle.slug}`" class="text-decoration-none">
                <i class="bi bi-link-45deg"></i> {{ relatedArticle.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Sources if any -->
        <div v-if="term.sources && term.sources.length > 0" class="sources mt-4 pt-3 border-top">
          <h3 class="h6 mb-2">Sources</h3>
          <ul class="list-unstyled small">
            <li v-for="(source, index) in term.sources" :key="index">
              <a v-if="source.url" :href="source.url" target="_blank" rel="noopener noreferrer">
                {{ source.title }}
              </a>
              <span v-else>{{ source.title }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 d-none d-lg-block sticky-sidebar">
        <GlossaryCta />
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="alert alert-warning" role="alert">
      Sorry, the requested term could not be found.
      <div class="mt-3">
        <NuxtLink to="/glossary" class="btn btn-primary">Return to Glossary</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const termSlug = computed(() => {
  return Array.isArray(route.params.term) 
    ? route.params.term.join('/') 
    : route.params.term;
});

const term = ref(null);
const isLoading = ref(true);
const error = ref(null);

// Fetch specific glossary term
async function fetchTerm() {
  try {
    isLoading.value = true;
    error.value = null;

    const { data } = await useFetch(`/api/glossary/${termSlug.value}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (data.value) {
      term.value = data.value;
    } else {
      error.value = 'Term not found';
    }
  } catch (err) {
    console.error('Error fetching glossary term:', err);
    error.value = 'An error occurred while loading the term.';
  } finally {
    isLoading.value = false;
  }
}

// Watch for changes in route params to refetch when navigating between terms
watch(termSlug, () => {
  fetchTerm();
}, { immediate: true });

// SEO Metadata
useHead(() => ({
  title: term.value 
    ? `${term.value.title} | Legal Glossary | O'Haire Law` 
    : 'Legal Glossary | O\'Haire Law',
  meta: [
    { 
      name: 'description', 
      content: term.value 
        ? `${term.value.definition.substring(0, 155)}...` 
        : 'Browse our comprehensive legal glossary to help understand legal terminology and concepts.'
    }
  ]
}));
</script>

<style scoped>
.term-content {
  border-left: 4px solid #0d6efd;
}

.definition {
  font-size: 1.1rem;
}

.sources {
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
