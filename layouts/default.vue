<template>
  <div>
    <HeaderView />
    <slot />
  </div>
  <Booking />

  <ClientOnly>
    <FloatingCta :scroll-threshold="300" />
  </ClientOnly>
</template>