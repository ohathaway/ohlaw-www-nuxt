<template>
  <section class="py-5" :class="bgClass">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <div class="row">
        <div 
          v-for="(offering, index) in offerings" 
          :key="index"
          :class="columnClass"
          class="mb-4"
        >
          <div class="card h-100">
            <div class="card-body p-lg-5">
              <h3 class="card-title">{{ offering.title }}</h3>
              <p class="card-text">{{ offering.description }}</p>
              <ul v-if="offering.features && offering.features.length">
                <li v-for="(feature, fIndex) in offering.features" :key="fIndex">
                  <span v-if="!feature.isHtml">{{ feature.text }}</span>
                  <span v-else v-html="feature.text"></span>
                </li>
              </ul>
              <slot :name="`offering-${index}`" :offering="offering"></slot>
            </div>
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
  offerings: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 2,
    validator: (value) => [1, 2, 3, 4].includes(value)
  },
  background: {
    type: String,
    default: 'light',
    validator: (value) => ['', 'light', 'primary', 'secondary', 'dark'].includes(value)
  }
})

const bgClass = computed(() => {
  return props.background ? `bg-${props.background}` : '';
})

const columnClass = computed(() => {
  const colSizes = {
    1: 'col-12',
    2: 'col-md-6',
    3: 'col-md-4',
    4: 'col-md-6 col-lg-3'
  };
  return colSizes[props.columns] || 'col-md-6';
})
</script>

<style scoped lang="scss">
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}

.card-title {
  color: #0056b3;
  font-weight: 600;
  margin-bottom: 1rem;
}

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

.bg-primary .card-title, .bg-dark .card-title {
  color: #0056b3;
}

@media (max-width: 768px) {
  h2.text-center:after {
    width: 60px;
  }
  
  .card {
    margin-bottom: 20px;
  }
}
</style>