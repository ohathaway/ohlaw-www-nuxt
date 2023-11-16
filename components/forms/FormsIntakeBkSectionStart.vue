<template>
  <div class="row">
    <div class="col-10">Click the Edit button to start the {{ props.sectionName }} section</div>
    <div class="col-2">
      <button
        type="button"
        class="btn btn-outline-dark btn-edit-control"
        :title="props.sectionName"
        @click="editing = !editing"
      >
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  sectionName: {
    type: String,
    required: true
  }
})

const editing = inject('editing')
</script>
