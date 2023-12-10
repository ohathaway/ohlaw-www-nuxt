<template>
  <div>
    <main class="main p-5">
      <BlogHeader />
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
a {
  color: black;
  &.hover {
    text-decoration: underline;
  }
}

p {
  font-size: 1.2rem;
  font-weight: 100;
}
</style>