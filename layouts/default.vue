<template>
  <div>
    <HeaderView />
    <slot />
  </div>
  <Booking />

  <ClientOnly>
    <FloatingCta
      :scroll-threshold="300"
      :visible="showFloatingCta"
    />
  </ClientOnly>
</template>

<script setup>
const route = useRoute()
const { floatingCta: { alwaysPaths } } = useAppConfig()

const showFloatingCta = computed(() => {
  return alwaysPaths.some(path => route.path.startsWith(path))
})
</script>