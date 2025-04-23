<template>
  <div class="quiz-question p-4">
    <!-- Question header -->
    <h3 class="question-text mb-3" :id="`question-${question.questionId}-text`">{{ question.questionText }}</h3>
    
    <!-- Optional description -->
    <div v-if="question.description" class="question-description mb-4"><BlogRichText :block="question.description" /></div>
    
    <!-- Question media if available -->
    <div v-if="question.media" class="question-media mb-4">
      <img :src="question.media" :alt="question.questionText" class="img-fluid rounded">
    </div>
    
    <!-- Answer options container -->
    <div class="answer-options mt-4" :aria-labelledby="`question-${question.questionId}-text`">
      <!-- Multiple choice (checkboxes) -->
      <div v-if="question.type === 'multiple_choice'" class="multiple-choice">
        <fieldset :aria-labelledby="`question-${question.questionId}-text`">
          <legend class="visually-hidden">{{ question.questionText }}</legend>
          <div v-for="answer in question.answers" :key="answer.answerId" class="form-check mb-3 p-0">
            <label :for="`checkbox-${question.questionId}-${answer.answerId}`" class="form-check-label w-100">
              <div class="answer-option d-flex align-items-start p-3 rounded" 
                   :class="{ 'selected': selectedAnswers.includes(answer.answerId) }">
                <input 
                  :id="`checkbox-${question.questionId}-${answer.answerId}`"
                  type="checkbox" 
                  class="form-check-input me-3 mt-1"
                  v-model="selectedAnswersMap[answer.answerId]"
                  @change="syncSelectedAnswers"
                  :aria-labelledby="`answer-text-${question.questionId}-${answer.answerId}`"
                >
                <div class="answer-content flex-grow-1" @click.prevent="toggleCheckbox(answer.answerId)">
                  <div :id="`answer-text-${question.questionId}-${answer.answerId}`" class="answer-text">{{ answer.answerText }}</div>
                  <img v-if="answer.media" :src="answer.media" class="answer-media img-fluid mt-2 rounded" :alt="answer.answerText">
                </div>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
      
      <!-- Single choice (radio buttons) -->
      <div v-else-if="question.type === 'single_choice'" class="single-choice">
        <fieldset :aria-labelledby="`question-${question.questionId}-text`">
          <legend class="visually-hidden">{{ question.questionText }}</legend>
          <div v-for="answer in question.answers" :key="answer.answerId" class="form-check mb-3 p-0">
            <label :for="`radio-${question.questionId}-${answer.answerId}`" class="form-check-label w-100">
              <div class="answer-option d-flex align-items-start p-3 rounded" 
                   :class="{ 'selected': selectedAnswer === answer.answerId }"
              >
                <input 
                  :id="`radio-${question.questionId}-${answer.answerId}`"
                  type="radio" 
                  class="form-check-input me-3 mt-1" 
                  :checked="selectedAnswer === answer.answerId"
                  :name="`question-${question.questionId}`"
                  @change="selectSingleChoice(answer.answerId)"
                  :aria-labelledby="`answer-text-${question.questionId}-${answer.answerId}`"
                >
                <div class="answer-content flex-grow-1">
                  <div :id="`answer-text-${question.questionId}-${answer.answerId}`" class="answer-text">{{ answer.answerText }}</div>
                  <img v-if="answer.media" :src="answer.media" class="answer-media img-fluid mt-2 rounded" :alt="answer.answerText">
                </div>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
      
      <!-- Boolean (Yes/No) -->
      <div v-else-if="question.type === 'boolean'" class="boolean-choice text-center">
        <fieldset :aria-labelledby="`question-${question.questionId}-text`">
          <legend class="visually-hidden">{{ question.questionText }}</legend>
          <div class="btn-group btn-group-lg d-flex mt-4" role="group" aria-label="Yes or No options">
            <input 
              type="radio" 
              class="btn-check" 
              :id="`boolean-true-${question.questionId}`" 
              :name="`question-${question.questionId}`" 
              :checked="selectedAnswer === 'true'"
              @change="selectSingleChoice('true')"
            >
            <label :for="`boolean-true-${question.questionId}`" class="btn btn-outline-primary flex-grow-1 py-3">
              <i class="bi bi-check-circle me-2"></i> Yes
            </label>
            
            <input 
              type="radio" 
              class="btn-check" 
              :id="`boolean-false-${question.questionId}`" 
              :name="`question-${question.questionId}`" 
              :checked="selectedAnswer === 'false'"
              @change="selectSingleChoice('false')"
            >
            <label :for="`boolean-false-${question.questionId}`" class="btn btn-outline-primary flex-grow-1 py-3">
              <i class="bi bi-x-circle me-2"></i> No
            </label>
          </div>
        </fieldset>
      </div>
      
      <!-- Scale (1-5) -->
      <div v-else-if="question.type === 'scale'" class="scale-choice">
        <fieldset :aria-labelledby="`question-${question.questionId}-text`">
          <legend class="visually-hidden">{{ question.questionText }}</legend>
          <div class="scale-labels d-flex justify-content-between mb-2">
            <small>Not at all</small>
            <small>Extremely</small>
          </div>
          <div class="scale-options d-flex justify-content-between" role="radiogroup">
            <template v-for="value in 5" :key="value">
              <input 
                type="radio"
                class="visually-hidden" 
                :id="`scale-${question.questionId}-${value}`"
                :name="`question-${question.questionId}`"
                :value="value.toString()"
                :checked="selectedAnswer === value.toString()"
                @change="selectSingleChoice(value.toString())"
              >
              <label 
                :for="`scale-${question.questionId}-${value}`"
                class="btn scale-btn" 
                :class="selectedAnswer === value.toString() ? 'btn-primary' : 'btn-outline-primary'"
              >
                {{ value }}
              </label>
            </template>
          </div>
        </fieldset>
      </div>
    </div>
    
    <!-- Navigation buttons -->
    <div class="navigation-buttons d-flex justify-content-between mt-5">
      <button 
        v-if="showPrevButton && question.order > 1" 
        class="btn btn-outline-secondary" 
        @click="$emit('previous')"
        type="button"
        aria-label="Go to previous question"
      >
        <i class="bi bi-chevron-left"></i> Previous
      </button>
      <div v-else></div>
      
      <button 
        class="btn btn-primary" 
        @click="submitAnswer"
        :disabled="!isValid"
        type="button"
        :aria-label="isLastQuestion ? 'Submit answers' : 'Go to next question'"
      >
        {{ nextButtonText }}
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  isLastQuestion: {
    type: Boolean,
    default: false
  },
  showPrevButton: {
    type: Boolean,
    default: false
  },
  // Optional prop to restore previous answers when navigating back
  initialAnswers: {
    type: [Array, String],
    default: () => []
  }
})

const emit = defineEmits(['answer', 'previous'])

// State for different question types
const selectedAnswers = ref([]) // For multiple-choice
const selectedAnswer = ref('') // For single-choice, boolean, scale
const selectedAnswersMap = ref({}) // Object map for checkboxes to avoid double firing

// Initialize with initial answers if provided
onMounted(() => {
  if (props.initialAnswers) {
    if (props.question.type === 'multiple_choice' && Array.isArray(props.initialAnswers)) {
      selectedAnswers.value = [...props.initialAnswers]
      // Initialize the map
      props.initialAnswers.forEach(id => {
        selectedAnswersMap.value[id] = true
      })
    } else if (props.question.type !== 'multiple_choice') {
      selectedAnswer.value = props.initialAnswers.toString()
    }
  }
})

// Sync the checkbox map with the selectedAnswers array
const syncSelectedAnswers = () => {
  selectedAnswers.value = Object.keys(selectedAnswersMap.value).filter(key => selectedAnswersMap.value[key])
}

// Toggle checkbox via clicking on the content div
const toggleCheckbox = (answerId) => {
  selectedAnswersMap.value[answerId] = !selectedAnswersMap.value[answerId]
  syncSelectedAnswers()
}

// Handle single choice selection
const selectSingleChoice = (answerId) => {
  selectedAnswer.value = answerId
}

// Determine if the current answer selection is valid
const isValid = computed(() => {
  if (props.question.type === 'multiple_choice') {
    return Object.values(selectedAnswersMap.value).some(value => value === true)
  } else {
    return selectedAnswer.value !== ''
  }
})

// Text for the next button
const nextButtonText = computed(() => {
  return props.isLastQuestion ? 'Submit' : 'Next'
})

// Submit the answer
const submitAnswer = () => {
  if (!isValid.value) return
  
  // Make sure selectedAnswers is synced with the map first
  if (props.question.type === 'multiple_choice') {
    syncSelectedAnswers()
  }
  
  const answer = props.question.type === 'multiple_choice' 
    ? selectedAnswers.value 
    : selectedAnswer.value
    
  emit('answer', props.question.questionId, answer)
}
</script>

<style scoped>
.quiz-question {
  background-color: white;
  border-radius: 0.5rem;
}

.question-description {
  color: #6c757d;
}

.answer-option {
  cursor: pointer;
  border: 1px solid #dee2e6;
  transition: all 0.2s ease;
}

.answer-option:hover {
  border-color: #003399;
  background-color: rgba(0, 51, 153, 0.05);
}

.answer-option.selected, .btn-check:checked + label {
  border-color: #003399;
  background-color: rgba(0, 51, 153, 0.1);
  color: var(--bs-body-color);
}

.scale-choice {
  max-width: 600px;
  margin: 0 auto;
}

.scale-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.boolean-choice .btn {
  font-weight: bold;
  transition: all 0.2s ease;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .scale-btn {
    width: 50px;
    height: 50px;
  }
}
</style>