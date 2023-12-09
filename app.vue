<template>
  <div>
    <HeaderView />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <FooterView />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-snap-type: y mandatory;
  // scroll-snap-align: top;
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

:target:before {
    content: "";
    display: block;
    height: 100px;
    margin: -100px 0 0;
}
</style>
