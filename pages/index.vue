<template>
  <div>
    <main :class="store.mainClasses">
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <LinesOfBusinessSection></LinesOfBusinessSection>
      <DifferentSection></DifferentSection>
      <ContactSection></ContactSection>
    </main>
  </div>
</template>

<script setup>
const store = useMainStore()
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
