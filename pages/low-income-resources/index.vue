<template>
  <main id="lowIncomeResources" class="container-fluid main px-lg-5 py-lg-5">
    <h1>Low-Income Resources</h1>
    <span
      class="badge rounded-pill text-bg-primary"
      v-for="category in categories" :key="category"
      @click="filterCategory($event)"
    >
      {{ category }}
    </span>
    <input v-model="filters.all.value" placeholder="Filter..." />
    <button class="btn btn-secondary btn-sm" @click="clearFilters()">Clear Filters</button>
    <VTable :data="resources" :filters="filters">
      <template #head>
        <tr>
          <VTh sortKey="category">Category</VTh>
          <VTh sortKey="name">Name</VTh>
          <VTh sortKey="serviceArea">Service Area</VTh>
        </tr>
      </template>
      <template #body="{rows}">
        <tr v-for="row in rows" :key="row.name">
          <td>{{ row.category }}</td>
          <td>
            <a :href="row.website" :title="row.name" target="_blank">
              {{ row.name }}
            </a>
          </td>
          <td>{{ row.serviceArea }}</td>
        </tr>
      </template>
    </VTable>
  </main>
</template>

<script setup>
import { collection } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'

const db = useFirestore()

const resourcesRef = collection(db, 'lowIncomeResources')
const resources = useCollection(resourcesRef)

const categories = [...new Set(resources.value.map(resource => resource.category))]

const filters = ref({
  all: { value: '', keys: ['category', 'name'] },
  category: { value: '', keys: ['category'] }
})

const clearFilters = () => {
  filters.value = {
    all: { value: '', keys: ['category', 'name'] },
    category: { value: '', keys: ['category'] }
  }
}

const filterCategory = event => {
  const filter = event.target.innerText
  filters.value.category.value = filter
}
</script>

<style lang="scss" scoped>
.badge:hover {
  cursor: pointer;
}
</style>