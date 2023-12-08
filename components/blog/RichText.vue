<template>
  <div v-for="brick in block">
    <h2
      v-if="brick.type === 'heading' && brick.level === 1"
      :id="brick.children[0].text.replaceAll(' ', '-').toLowerCase()"
    >
      {{ brick.children[0].text }}
    </h2>
    <h3 v-if="brick.type === 'heading' && brick.level === 2">
      {{ brick.children[0].text }}
    </h3>
    <h4 v-if="brick.type === 'heading' && brick.level === 3">
      {{ brick.children[0].text }}
    </h4>
    <p v-if="brick.type === 'paragraph'">
      {{ brick.children[0].text }}
    </p>
  </div>
  <div class="closing">
    <p>{{ closing }}</p>
  </div>
</template>

<script setup>
const { block, closing } = defineProps(['block', 'closing'])
</script>