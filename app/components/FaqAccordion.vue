<template>
  <div class="accordion" :id="uniqueId">
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="accordion-item"
    >
      <h2 class="accordion-header" :id="getHeaderId(index)">
        <button
          class="accordion-button"
          :class="{ collapsed: index !==0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#${getAccordionId(index, 'collapse')}`"
          aria-expanded="true"
          :aria-controls="getAccordionId(index, 'collapse')"
        >
          <p v-html="item.question"></p>
        </button>
      </h2>
      <div
        :id="getAccordionId(index, 'collapse')"
        class="accordion-collapse collapse"
        :class="{ show: index === 0}"
        :aria-labelledby="getAccordionId(index, 'heading')"
        :data-bs-parent="`#${uniqueId}`"
      >
        <div class="accordion-body">
          <p v-html="item.answer"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  faqItems: {
    type: Array,
    required: true
  }
})

const uniqueId = `accordion-${Math.random().toString(36).substr(2, 9)}`

const getHeaderId = index => `${uniqueId}-heading-${index}`
const getAccordionId = (index, type) => `${uniqueId}-${type}-${index}`
</script>

<style scoped lang="scss">
.accordion-button {
  font-seize: 1.2rem;
  font-weight: bold;
}

.accordion-body {
  font-size: 1rem;
}
</style>