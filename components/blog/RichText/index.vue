<template>
  <div class="rich-text">
    <template v-for="brick in block">
      <!-- headings -->
      <h2
        v-if="brick.type === 'heading' && brick.level === 1"
        :id="brick.children[0].text.replaceAll(' ', '-').toLowerCase()"
      >
        {{ brick.children[0].text }}
      </h2>
      <h3 v-else-if="brick.type === 'heading' && brick.level === 2">
        {{ brick.children[0].text }}
      </h3>
      <h4 v-else-if="brick.type === 'heading' && brick.level === 3">
        {{ brick.children[0].text }}
      </h4>
      
      <!-- lists -->
      <BlogRichTextOrderedList
        v-else-if="brick.type === 'list' && brick.format === 'ordered'"
        :brick="brick"
      />
      <BlogRichTextUnOrderedList
        v-else-if="brick.type === 'list' && brick.format === 'unordered'"
        :brick="brick"
      />

      <!-- paragraphs-->
      <p v-else-if="brick.type === 'paragraph'">
        <template v-for="child in brick.children">
          <BlogRichTextModifier v-if="isModifier(child)" :brick="child" />
          <BlogRichTextLink
            v-if="child.type === 'link'"
            :brick="child"
          />
          <template v-else-if="child.type === 'text'">
            {{ child.text }}
          </template>
        </template>
      </p>
    </template>
  </div>
</template>

<script setup>
import { intersection } from 'lodash'
const { block } = defineProps(['block'])
</script>