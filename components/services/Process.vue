<template>
  <section :id="id" class="py-5" :class="bgClass">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <p v-if="description" class="text-center mb-5">{{ description }}</p>
      <Timeline :tl-content="processSteps"></Timeline>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: 'service-process'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  processSteps: {
    type: Array,
    required: true
  },
  background: {
    type: String,
    default: '',
    validator: (value) => ['', 'light', 'primary', 'secondary', 'dark'].includes(value)
  }
})

const bgClass = computed(() => {
  return props.background ? `bg-${props.background}` : '';
})
</script>

<style scoped lang="scss">
h2 {
  color: #0056b3;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  
  &.text-center:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #0056b3;
  }
}

.bg-primary h2, .bg-dark h2 {
  color: white;
  
  &.text-center:after {
    background-color: white;
  }
}

@media (max-width: 768px) {
  h2.text-center:after {
    width: 60px;
  }
}
</style>