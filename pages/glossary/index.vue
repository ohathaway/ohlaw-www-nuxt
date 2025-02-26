<template>
  <main class="main">

    <!-- Hero Section -->
    <section class="hero bg-primary py-0">
        <NuxtImg class="w-100" src="/img/glossary-article-header.webp" />
    </section>
    
    <!-- Alphabet Navigation -->
    <nav aria-label="Glossary alphabetical navigation" class="my-4">
      <ul class="alphabet-nav d-flex flex-wrap list-unstyled justify-content-center">
        <li v-for="letter in alphabet" :key="letter" class="me-2 mb-2">
          <button 
            @click="filterByLetter(letter)" 
            class="btn"
            :class="[activeLetter === letter ? 'btn-primary' : 'btn-outline-secondary']"
          >
            {{ letter }}
          </button>
        </li>
        <li class="me-2 mb-2">
          <button 
            @click="filterByLetter('all')" 
            class="btn"
            :class="[activeLetter === 'all' ? 'btn-primary' : 'btn-outline-secondary']"
          >
            All
          </button>
        </li>
      </ul>
    </nav>

    <!-- No Results -->
    <div v-if="filteredTerms.length === 0" class="alert alert-info" role="alert">
      No glossary terms found for "{{ activeLetter === 'all' ? 'any letter' : activeLetter }}".
    </div>

    <!-- Glossary Terms -->
    <div v-else class="row ps-5">
      <div class="glossary-terms col-md-9">
        <div v-for="(terms, letter) in groupedTerms" :key="letter" class="mb-4">
          <h2 class="h3 border-bottom pb-2 mb-3">{{ letter }}</h2>
          <ul class="list-unstyled">
            <li v-for="term in terms" :key="term.id" class="mb-3">
              <NuxtLink :to="`/glossary/${term.slug}`" class="term-link">
                <h3 class="h5 mb-1">{{ term.title }}</h3>
                <p class="text-muted small">{{ truncate(term.definition, 120) }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 d-none d-lg-block">
        <div class="sticky-sidebar">
          <GlossaryCta />
        </div>
      </div>"
    </div>
    <!-- Mobile CTA (visible only on smaller screens) -->
    <div class="d-block d-lg-none mt-4">
      <GlossaryCta />
    </div>
  </main>
</template>

<script setup>
// Define props from the server-side fetch
defineProps({
  glossaryTerms: {
    type: Array,
    default: () => []
  }
});

// Static data
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const activeLetter = ref('all');

// Get the data from props or directly from the server
// This ensures data is available both during SSR and client-side navigation
const { data: fetchedTerms } = await useAsyncData(
  'glossary-terms',
  () => $fetch('/api/glossary')
);

const allTerms = computed(() => fetchedTerms.value || []);

// Filter by letter
function filterByLetter(letter) {
  activeLetter.value = letter;
}

// Computed property for filtered terms
const filteredTerms = computed(() => {
  if (activeLetter.value === 'all') {
    return allTerms.value;
  } else {
    return allTerms.value.filter(term => 
      term.title.toUpperCase().startsWith(activeLetter.value)
    );
  }
});

// Group terms by first letter
const groupedTerms = computed(() => {
  const grouped = {};
  filteredTerms.value.forEach(term => {
    const firstLetter = term.title.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(term);
  });
  
  // Sort by letter
  const sorted = {};
  Object.keys(grouped).sort().forEach(key => {
    sorted[key] = grouped[key];
  });
  
  return sorted;
});

// Helper function to truncate text
function truncate(text, length) {
  if (!text) return '';
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

// SEO Metadata
useHead({
  title: 'Legal Glossary | O\'Haire Law',
  meta: [
    { 
      name: 'description', 
      content: 'Browse our comprehensive legal glossary to help understand legal terminology and concepts.'
    }
  ]
});
</script>

<style scoped>
.alphabet-nav {
  margin-bottom: 1.5rem;
}

.alphabet-nav button {
  min-width: 36px;
}

.term-link {
  display: block;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  color: inherit;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

.term-link:hover {
  background-color: #e9ecef;
  text-decoration: none;
}

.glossary-cta-box {
  background-color: #f8f9fa;
}
</style>