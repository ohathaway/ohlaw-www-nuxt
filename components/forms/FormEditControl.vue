<template>
  <div class="col-2">
    <button type="button" class="btn btn-outline-dark btn-edit-control" @click="editing = !editing">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const editing = inject('editing')
</script>