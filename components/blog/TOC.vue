<template>
  <div
    :id="id"
    :class="resolveClasses(sticky)"
  >
    <h4 v-if="id === 'toc'">In This Article</h4>
    <h4 v-else>In This Article We Cover:</h4>
    <div v-for="brick in content">
      <div v-if="brick.type === 'heading' && brick.level === 1 ">
        <a :href="formatAnchorText(brick.children[0].text)">
          {{ brick.children[0].text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { content, id, sticky } = defineProps({
  content: Array, 
  id: {
    type: String,
    default: 'toc'
  },
  sticky: Boolean
})

const resolveClasses = sticky => {
  let classList = ['top-50', 'p-2']

  if (sticky === true) classList.push('position-sticky')
  if (id.match('toc')) {
    classList.push(
      'print-d-none',
      'float-end',
      'fs-6'
    )
  }

  return classList
}

resolveClasses(true)
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>