<template>
  <button
    type="button"
    class="btn btn-outline-secondary me-3 btn-cancel-control"
    @click="editing = false"
    passive
  >
    Cancel
  </button>
</template>

<script setup>
import { inject } from 'vue'
const editing = inject('editing')
</script>