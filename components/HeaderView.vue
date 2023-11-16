<template>
  <HeaderViewMain v-if="!route.fullPath.match(/\/forms/)" />
  <HeaderViewForms v-else />
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderViewMain from './HeaderViewMain.vue'
import HeaderViewForms from './HeaderViewForms.vue'

const route = useRoute()
</script>
