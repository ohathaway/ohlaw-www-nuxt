<template>
  <section class="hero bg-primary text-center py-5" :style="backgroundStyle">
    <div class="container">
      <h1 class="display-4" v-html="title"></h1>
      <p class="lead">{{ subtitle }}</p>
      <button v-if="buttonText" class="btn btn-light btn-lg mt-3" @click="handleButtonClick">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: ''
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

const backgroundStyle = computed(() => {
  if (!props.backgroundImage) return {}
  
  return {
    backgroundImage: `linear-gradient(rgba(0, 86, 179, 0.8), rgba(0, 86, 179, 0.8)), url('${props.backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

const handleButtonClick = () => {
  if (props.buttonLink) {
    window.open(props.buttonLink, '_blank')
  }
  emit('buttonClick')
}
</script>

<style scoped lang="scss">
.hero {
  color: white;
  padding: 80px 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
}
</style>