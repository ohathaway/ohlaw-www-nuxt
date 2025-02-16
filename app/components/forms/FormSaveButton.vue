<template>
  <button type="button" class="btn btn-primary" passive @click="save(props.store.caseDoc.filingInfo)">
    <i class="far fa-floppy-disk"></i>
    &nbsp; Save
  </button>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps(['store'])

const editing = inject('editing')

const save = (filingInfo) => {
  props.store.save(filingInfo).then(() => (editing.value = false))
}
</script>