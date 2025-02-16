<template>
  <div
    id="toc"
    class="position-sticky top-50 p-2"
  >
    <h4>In This Article</h4>
    <div v-for="brick in content">
      <div v-if="brick.type === 'heading' && brick.level === 1 ">
        <a :href="`#${brick.children[0].text.replaceAll(' ', '-').toLowerCase()}`">
          {{ brick.children[0].text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { content } = defineProps(['content'])
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>