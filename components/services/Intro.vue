<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2><span v-html="title"></span></h2>
          <p><span v-html="description"></span></p>
          <ul v-if="features.length" class="feature-list">
            <li v-for="(feature, index) in features" :key="index">
              <strong>{{ feature.title }}:</strong> <span v-html="feature.description"></span>
            </li>
          </ul>
          <slot name="additional-content"></slot>
        </div>
        <div class="col-lg-6">
          <LayoutMediaFocus
            :source="imageSource"
            :provider="imageProvider"
            :title="imageTitle"
          />
          <div v-if="buttonText" class="text-center mt-4">
            <button class="btn btn-primary btn-lg" @click="handleButtonClick">
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
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
  features: {
    type: Array,
    default: () => []
  },
  imageSource: {
    type: String,
    required: true
  },
  imageProvider: {
    type: String,
    default: 'cloudflare'
  },
  imageTitle: {
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

const handleButtonClick = () => {
  if (props.buttonLink) {
    window.open(props.buttonLink, '_blank')
  }
  emit('buttonClick')
}
</script>

<style scoped lang="scss">
.feature-list {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;

    &:before {
      content: "\f633";  /* Bootstrap Icons code for checkbox */
      font-family: "bootstrap-icons";
      position: absolute;
      left: 0;
      top: 2px;
      color: #0056b3;
    }
  }
}

@media (max-width: 768px) {
  .feature-list li {
    padding-left: 25px;
  }
}
</style>