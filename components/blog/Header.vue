<template>
  <div class="row pb-5">
    <div class="col-md-12 text-center">
      <h1>Resources for <i>Life and Legacy Planning</i></h1>
    </div>
  </div>
  <div
    class="categories-nav border-top border-bottom w-75 mx-auto"
  >
    <ul class="nav nav-underline nav-fill justify-content-center">
      <li class="nav-item blog-category">
        <a class="nav-link" href="/blog">Home</a>
      </li>
      <li
        v-for="category in categories"
        class="nav-item blog-category"
      >
        <a
          :class="getNavLinkClasses(category.slug)"
          :id="category.slug"
          :href="`/blog/categories/${category.slug}`"
        >
          {{ category.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute()

const categories = [
  {
    slug: 'legacy-planning',
    name: 'Legacy Planning'
  },
  {
    slug: 'small-business',
    name: 'Small Business'
  },
  {
    slug: 'elder-care',
    name: 'Elder Care'
  },
  {
    slug: 'being-human',
    name: 'Being Human'
  }
]

const getNavLinkClasses = slug => {
  const classes = ['nav-link']
  return route.path.split('/').pop() === slug
    ? ['active', ...classes]
    : classes
}
</script>