<template>
  <UHeader :links="links">
    <template #leading>
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-gray-800">CAPTURE</span>
        <svg
          class="absolute bottom-[-10px] left-0 w-full h-2"
          viewBox="0 0 100 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <ellipse rx="100" ry="50" cx="120" cy="80"
          style="fill:#f6f7fb;stroke:green;stroke-width:3"
        />
        </svg>
      </div>
    </template>
    <template #logo>
      <NuxtImg src="/img/ohlaw_only.svg" alt="Firm Logo" width="180" />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <!-- <UHeaderLinks :links="links" /> -->

      <!-- <UDivider class="my-6" /> -->

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3"
      />
      <UButton
        label="Get started"
        block
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const links = computed(() => [{
  label: 'Services',
  to: '/services'
}, {
  label: 'Blog',
  to: '#blog'
}, {
  label: 'Testimonials',
  to: '#testimonials'
}, {
  label: 'Resources',
  to: '/resources'
}, {
  label: 'Schedule',
  to: '#contact'
}])
</script>