<template>
  <strong v-if="brick.bold">{{ brick.text }}</strong>
  <i v-else-if="brick.italic">{{ brick.text }}</i>
  <u v-else-if="brick.underline">{{ brick.text }}</u>
  <s v-else-if="brick.strikethrough">{{ brick.text }}</s>
  <pre v-else="brick.code">{{ brick.text }}</pre>
</template>

<script setup>
const { brick } = defineProps(['brick'])
</script>