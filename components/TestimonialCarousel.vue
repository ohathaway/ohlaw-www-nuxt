<template>
  <div class="footer-testimonials">
    <h5 class="testimonials-title mb-3">What Our Clients Say</h5>
    
    <div class="testimonial-carousel">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="testimonial-item">
          <div class="testimonial-stars mb-2">
            <font-awesome-icon 
              v-for="n in currentTestimonial.rating" 
              :key="n" 
              icon="fas fa-star" 
              class="star-icon"
            />
          </div>
          
          <div class="testimonial-content mb-3">
            <font-awesome-icon icon="fas fa-quote-left" class="quote-icon me-1" />
            {{ currentTestimonial.text }}
            <font-awesome-icon icon="fas fa-quote-right" class="quote-icon ms-1" />
          </div>
          
          <div class="testimonial-author">
            <span class="fw-semibold">{{ currentTestimonial.author }}</span>
            <span v-if="currentTestimonial.service" class="testimonial-service">
              • {{ currentTestimonial.service }}
            </span>
          </div>
          
          <div class="testimonial-source mt-2">
            <img 
              src="/img/Search_GSA.original.png" 
              alt="Google Review" 
              class="google-icon me-1" 
            />
            Verified Google Review
          </div>
        </div>
      </transition>
      
      <div class="testimonial-controls mt-3">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          @click="setTestimonial(index)"
          class="testimonial-dot"
          :class="{ active: index === currentIndex }"
          :aria-label="`View testimonial ${index + 1}`"
        ></button>
      </div>
      
      <a 
        v-if="googleReviewUrl"
        :href="googleReviewUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="google-link mt-3 d-inline-block"
      >
        <font-awesome-icon icon="fas fa-external-link-alt" class="me-1" />
        Read more reviews
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  autoRotate: {
    type: Boolean,
    default: true
  },
  rotationInterval: {
    type: Number,
    default: 10000 // 10 seconds
  },
  googleReviewUrl: {
    type: String,
    default: `https://www.google.com/search?q=the+law+offices+of+owen+hathaway&client=safari&sca_esv=e86fb0d398013f57&source=hp&ei=FJzQZ7SiFP_BkPIPwY3vSQ&iflsig=ACkRmUkAAAAAZ9CqJPh9Aq4sdqyWseaBl582iHPPcK1c&ved=0ahUKEwi0_NSM7oKMAxX_IEQIHcHGOwkQ4dUDCBA&uact=5&oq=the+law+offices+of+owen+hathaway&gs_lp=Egdnd3Mtd2l6IiB0aGUgbGF3IG9mZmljZXMgb2Ygb3dlbiBoYXRoYXdheTIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSNgDUABYAHAAeACQAQCYAWGgAWGqAQExuAEDyAEA-AEC-AEBmAIBoAJpmAMAkgcDMC4xoAeLBg&sclient=gws-wiz&sei=HZzQZ4fRHYDh0PEP-8bPyAk&dlnr=1#`
  }
})

// Sample testimonials - replace with your actual reviews
const testimonials = ref([
  {
    author: 'joy simpson',
    rating: 5,
    text: `Amazing team! Knowledgeable, professional, Trustworthy and friendly. They go beyond and above to support your needs`,
    service: 'Estate Planning'
  },
  {
    author: 'Sandi Fank',
    rating: 5,
    text: `Highly recommend these guys! They've been by my side throughout the ups and downs and I feel confident that I'm not just another "file". Great job!`,
    service: 'Bankruptcy'
  },
  {
    author: 'Travis WH',
    rating: 5,
    text: `I recently has a case where I was in over my head and feeling bullied and abused by an aggressive lawyer and a murky and mysterious legal system. After trying a few law firms and resources with little to no help I was finally guided to Owen. To start his assistant was very friendly and kind and I appreciate her patience in hearing my woes and making sure Owen was available right away. She was great! In minutes he clarified all the facts, broke down the way to move forward, and restored a feeling of confidence and security. His quick and accurate answers, deep knowledge, and calm demeanor made a months worth of stress evaporate. I am sure to Owen this was just another Wednesday but to me and people reading this his services change your day and life quickly. 100% I would send friends and family to Owen for anything he can help with. THANK YOU OWEN AND STAFF!`,
    service: 'Debt Management'
  }
])

const currentIndex = ref(0);
const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);
let intervalId = null;

// Function to advance to the next testimonial
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

// Function to set a specific testimonial
const setTestimonial = (index) => {
  currentIndex.value = index;
  // Reset the timer when manually changing testimonials
  if (props.autoRotate && intervalId) {
    clearInterval(intervalId);
    startRotation();
  }
};

// Start the automatic rotation
const startRotation = () => {
  if (props.autoRotate) {
    intervalId = setInterval(nextTestimonial, props.rotationInterval);
  }
};

// Pause rotation on hover/focus for accessibility
const pauseRotation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

// Resume rotation when not hovering/focusing
const resumeRotation = () => {
  if (props.autoRotate && !intervalId) {
    startRotation();
  }
};

// Set up event listeners and start rotation
onMounted(() => {
  startRotation();
  
  const element = document.querySelector('.testimonial-carousel');
  if (element) {
    element.addEventListener('mouseenter', pauseRotation);
    element.addEventListener('mouseleave', resumeRotation);
    element.addEventListener('focusin', pauseRotation);
    element.addEventListener('focusout', resumeRotation);
  }
});

// Clean up when component is destroyed
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  
  const element = document.querySelector('.testimonial-carousel');
  if (element) {
    element.removeEventListener('mouseenter', pauseRotation);
    element.removeEventListener('mouseleave', resumeRotation);
    element.removeEventListener('focusin', pauseRotation);
    element.removeEventListener('focusout', resumeRotation);
  }
});

defineExpose({
  setTestimonial,
  nextTestimonial,
  pauseRotation,
  resumeRotation
});
</script>

<style scoped lang="scss">
.footer-testimonials {
  padding: 0 1rem;
  
  .testimonials-title {
    border-bottom: 2px solid #6c757d;
    padding-bottom: 0.5rem;
  }
  
  .testimonial-carousel {
    position: relative;
    min-height: 200px; // Adjust based on your content
  }
  
  .testimonial-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1rem;
  }
  
  .testimonial-stars {
    .star-icon {
      color: #FFC107;
      margin-right: 2px;
    }
  }
  
  .testimonial-content {
    font-style: italic;
    font-size: 0.95rem;
    line-height: 1.5;
    
    .quote-icon {
      color: #f6f7fb;
      font-size: 0.8rem;
      vertical-align: super;
    }
  }
  
  .testimonial-author {
    font-size: 0.9rem;
    
    .testimonial-service {
      color: #f6f7fb;
    }
  }
  
  .testimonial-source {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #f6f7fb;
    
    .google-icon {
      height: 16px;
      width: 16px;
    }
  }
  
  .testimonial-controls {
    display: flex;
    justify-content: center;
    
    .testimonial-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #dee2e6;
      border: none;
      margin: 0 4px;
      padding: 0;
      cursor: pointer;
      transition: background-color 0.3s ease;
      
      &.active {
        background-color: #6d8cc7;
      }
      
      &:hover {
        background-color: #adb5bd;
      }
    }
  }
  
  .google-link {
    color: #ffffff;
    font-size: 0.85rem;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
