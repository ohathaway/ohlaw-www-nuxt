<template>
  <h5 class="color-danger" v-if="!hasAddress">address prop required</h5>
  <ul v-else>
    <li>{{ props.address.street1 }}</li>
    <li>{{ props.address.street2 }}</li>
    <li>
      {{ props.address.city }},&nbsp; {{ props.address.state }}&nbsp;
      {{ props.address.zip }}
    </li>
    <li v-if="props.address.moveInMonth">
      <span class="text-italic">Move in month:</span> {{ props.address.moveInMonth }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['address'])

const hasAddress = computed(() => {
  return !isEmpty(props.address)
})
</script>

<stype scoped lang="scss">
li {
  list-style-type: none;
}
</stype>
