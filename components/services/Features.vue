<template>
  <section class="py-5" :class="bgClass">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <p v-if="description" class="text-center mb-5">{{ description }}</p>
      <div class="row">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          :class="columnClass"
          class="mb-4"
        >
          <div class="card card-hover-shadow h-100">
            <div class="card-body text-center">
              <!-- Bootstrap Icon -->
              <i 
                v-if="feature.icon && !isIconFontAwesome(feature.icon)" 
                :class="`bi bi-${feature.icon} fs-1 mb-3`"
              ></i>
              
              <!-- Font Awesome Icon -->
              <font-awesome-icon 
                v-else-if="feature.icon" 
                :icon="parseFontAwesomeIcon(feature.icon)"
                transform="down-3 grow-4"
                class="mb-3"
              />
              
              <h3 class="card-title">{{ feature.title }}</h3>
              <p class="card-text">{{ feature.description }}</p>
              <slot :name="`feature-${index}`" :feature="feature"></slot>
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
  description: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 3,
    validator: (value) => [1, 2, 3, 4, 6].includes(value)
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

const columnClass = computed(() => {
  const colSizes = {
    1: 'col-12',
    2: 'col-md-6',
    3: 'col-md-4',
    4: 'col-md-6 col-lg-3',
    6: 'col-6 col-md-4 col-lg-2'
  };
  return colSizes[props.columns] || 'col-md-4';
})

/**
 * Checks if the icon is a Font Awesome icon
 * This function checks if the icon starts with 'fa-' or 'fas ' or contains 'fa fa-'
 */
const isIconFontAwesome = (icon) => {
  if (!icon) return false;
  
  // If icon contains full Font Awesome format (e.g., "fas fa-phone")
  if (icon.includes('fa-') || icon.startsWith('fa ') || icon.startsWith('fas ') || 
      icon.startsWith('far ') || icon.startsWith('fab ') || icon.startsWith('fal ') || 
      icon.startsWith('fad ')) {
    return true;
  }
  
  return false;
}

/**
 * Parses the Font Awesome icon string into the format expected by the font-awesome-icon component
 */
const parseFontAwesomeIcon = (icon) => {
  if (!icon) return '';
  
  // If the icon is already in the correct format, return it as is
  if (Array.isArray(icon) || typeof icon === 'object') {
    return icon;
  }
  
  // If it's a string in the format "fas fa-phone"
  const parts = icon.trim().split(' ');
  
  // Handle different formats
  if (parts.length >= 2) {
    // Format: "fas fa-phone" -> ["fas", "phone"]
    const prefix = parts[0];
    const iconName = parts[parts.length - 1].replace('fa-', '');
    return [prefix, iconName];
  } else if (icon.includes('fa-')) {
    // Format: "fa-phone" -> ["fas", "phone"]
    return ["fas", icon.replace('fa-', '')];
  }
  
  // Default: assume it's a Font Awesome icon name and use "fas" prefix
  return ["fas", icon];
}
</script>

<style scoped lang="scss">
.card-title {
  color: #0056b3;
  font-weight: 600;
}

.card-body .bi {
  color: #8A716A;
}

.card-body .svg-inline--fa {
  color: #8A716A;
  margin-bottom: 0.75rem;
  font-size: 2rem;
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