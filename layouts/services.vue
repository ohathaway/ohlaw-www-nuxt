<template>
  <div>
    <HeaderViewBlog />
    <main class="main services-main px-3 py-lg-5">
      <ServicesHeader />
      <slot />
    </main>
  </div>
  <Booking />
</template>

<style lang="scss">
a {
  color: #003399;
  &.hover {
    text-decoration: underline;
  }
}

p {
  font-size: 1.2rem;
  font-weight: 100;
}

.nav-item.blog-category {
  font-family: Quatrocentro, "Cantata One", Georgia, "Times New Roman", serif;
  font-size: 1.2rem;
  .nav-link {
    color: #3a3a3a;
  }
}

.section-1 {
  background: #ffffff;
}

.section-2 {
  background: #d8d8d8;
}

.section-3 {
  background: #ffffff;
  // color: #ffffff;
}
</style>