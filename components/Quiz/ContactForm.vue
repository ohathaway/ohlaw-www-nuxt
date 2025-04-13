<template>
  <div class="quiz-contact-form">
    <!-- Form header -->
    <div class="form-header text-center mb-4">
      <h3>Get Your Personalized Recommendations</h3>
      <p class="text-muted">
        Enter your contact information below to receive personalized advice 
        based on your quiz results.
      </p>
    </div>
    
    <!-- Contact form -->
    <form @submit.prevent="submitForm" class="p-4 border rounded bg-light">
      <div class="row g-3">
        <!-- First name -->
        <div class="col-md-6">
          <label for="firstName" class="form-label">First Name*</label>
          <input 
            type="text" 
            class="form-control" 
            id="firstName" 
            v-model="formData.firstName"
            :class="{ 'is-invalid': errors.firstName }"
            required
          >
          <div class="invalid-feedback" v-if="errors.firstName">
            {{ errors.firstName }}
          </div>
        </div>
        
        <!-- Last name -->
        <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name*</label>
          <input 
            type="text" 
            class="form-control" 
            id="lastName" 
            v-model="formData.lastName"
            :class="{ 'is-invalid': errors.lastName }"
            required
          >
          <div class="invalid-feedback" v-if="errors.lastName">
            {{ errors.lastName }}
          </div>
        </div>
        
        <!-- Email -->
        <div class="col-md-6">
          <label for="email" class="form-label">Email Address*</label>
          <input 
            type="email" 
            class="form-control" 
            id="email" 
            v-model="formData.email"
            :class="{ 'is-invalid': errors.email }"
            required
          >
          <div class="invalid-feedback" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>
        
        <!-- Phone -->
        <div class="col-md-6">
          <label for="phone" class="form-label">Phone Number</label>
          <input 
            type="tel" 
            class="form-control" 
            id="phone" 
            v-model="formData.phone"
            :class="{ 'is-invalid': errors.phone }"
          >
          <div class="invalid-feedback" v-if="errors.phone">
            {{ errors.phone }}
          </div>
        </div>
        
        <!-- Marketing consent -->
        <div class="col-12 mt-3">
          <div class="form-check">
            <input 
              class="form-check-input" 
              type="checkbox" 
              id="marketingConsent" 
              v-model="formData.marketingConsent"
            >
            <label class="form-check-label" for="marketingConsent">
              I agree to receive follow-up communications about my quiz results and related legal services.
            </label>
          </div>
        </div>
      </div>
      
      <!-- Privacy notice -->
      <div class="privacy-notice mt-4 mb-4">
        <p class="small text-muted">
          Your information is kept private and will only be used to provide you with the information you've requested. 
          See our <a href="/policies/Privacy" target="_blank">Privacy Policy</a> for details.
        </p>
      </div>
      
      <!-- Form buttons -->
      <div class="d-flex justify-content-between mt-4">
        <button 
          type="button" 
          class="btn btn-outline-secondary" 
          @click="$emit('skip')"
        >
          Skip for now
        </button>
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ isSubmitting ? 'Submitting...' : 'Get My Results' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['submit', 'skip'])

// Form data
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  marketingConsent: false
})

// Form state
const isSubmitting = ref(false)
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

// Form validation
const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')
  
  // Validate first name
  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }
  
  // Validate last name
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }
  
  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'Email address is required'
    isValid = false
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  // Validate phone (if provided)
  if (formData.phone.trim() && !isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
    isValid = false
  }
  
  return isValid
}

// Email validation helper
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Phone validation helper
const isValidPhone = (phone) => {
  // Basic US phone format validation (can be adjusted for international formats)
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return re.test(String(phone).trim())
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Emit the form data to parent component
    emit('submit', { ...formData })
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.quiz-contact-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-header h3 {
  color: #003399;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #003399;
  border-color: #003399;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
  color: #6c757d;
}

.privacy-notice {
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
}

.privacy-notice a {
  color: #003399;
  text-decoration: none;
}

.privacy-notice a:hover {
  text-decoration: underline;
}
</style>