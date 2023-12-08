<template>
   <main class="main pt-5 px-5">
    <BlogHeader />
    <slot />
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})
</script>

<style lang="scss">
a {
  color: black;
  &.hover {
    text-decoration: underline;
  }
}

p {
  font-size: 1.4rem;
  font-weight: 100;
}
</style>