<template>
  <section class="py-5 bg-primary text-white text-center">
    <div class="container">
      <h2 class="mb-4">{{ title }}</h2>
      <p class="lead mb-4">{{ description }}</p>
      <button v-if="buttonText" class="btn btn-light btn-lg" @click="handleButtonClick">
        {{ buttonText }}
      </button>
      <slot name="custom-button"></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['buttonClick'])

const handleButtonClick = () => {
  if (props.buttonLink) {
    window.open(props.buttonLink, '_blank')
  }
  emit('buttonClick')
}
</script>

<style scoped lang="scss">
.bg-primary {
  background-color: #0056b3 !important;
}

h2 {
  font-weight: 700;
}

.btn-light:hover {
  background-color: #e2e6ea;
  border-color: #dae0e5;
}
</style>