<template>
  <!-- lg search bar -->
  <div :class="searchBarClasses(['collapse'])" id="searchBar">
    <div class="nav py-3 justify-content-end">
      <FormKit type="search" aria-placeholder="Search..." label="Search..." :classes="{
    outer: '$reset nav-item width-25',
  }" />
    </div>
  </div>
  <!-- < lg search bar -->
  <div :class="searchBarClasses(['d-flex', 'd-lg-none'])">
    <FormKit type="search" aria-placeholder="Search..." label="Search..." :classes="{
    outer: '$reset nav-item mx-auto width-full',
    wrapper: '$reset ohlaw-wrapper'
  }" />
  </div>
</template>

<script setup>
const { search, result } = useMeiliSearch('post')

const searchBarClasses = addOns => {
  return [
    'border-top',
    'border-bottom',
    'collapse',
    'mx-auto',
    'position-relative',
    'search-bar',
    'w-75',
    ...addOns
  ]
}


onMounted( async () => {
  await search('retirement')
  console.debug('result: ', result)
})
</script>

<style lang="scss" scoped>
.width-25 {
  width: 25rem !important;
}

.width-full {
  width: 100%;
}
</style>