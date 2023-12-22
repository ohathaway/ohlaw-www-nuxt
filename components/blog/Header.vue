<template>
  <div class="row pb-lg-5">
    <div class="col-12 text-center">
      <h1>Resources for <i>Life and Legacy Planning</i></h1>
    </div>
  </div>
  <nav
    class="navbar navbar-expand-lg categories-nav position-sticky border-top border-bottom w-75 mx-auto"
  >
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerBlog" aria-controls="navbarTogglerBlogCategories" aria-expanded="false" aria-label="Toggle blog categories">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-lg-none justify-content-center">
        <h5>Categories</h5>
      </div>
      <div class="collapse navbar-collapse" id="navbarTogglerBlog">
        <ul class="navbar-nav nav-underline nav-fill w-100 justify-content-center">
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
    </div>
  </nav>
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

<style lang="scss" scoped>
.navbar {
  margin-top: 30px;
}
</style>