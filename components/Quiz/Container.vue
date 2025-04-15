<template>
  <div class="quiz-container">
    <!-- Loading state -->
    <div v-if="loading" class="text-center p-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Loading quiz...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center p-5">
      <div class="alert alert-danger" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        {{ error }}
      </div>
      <button class="btn btn-primary mt-3" @click="loadQuiz">Try Again</button>
    </div>

    <!-- Quiz content -->
    <div v-else-if="quiz" class="quiz-content">
      <h2 class="mb-4">{{ quiz.title }}</h2>
      <!-- Introduction (shown before starting) -->
      <div v-if="!started && !completed" class="quiz-intro text-center p-4">
        <!-- <h2 class="mb-4">{{ quiz.title }}</h2> -->
        <div class="quiz-description mb-5"><BlogRichText :block="quiz.description" /></div>
        <button class="btn btn-primary btn-lg" @click="startQuiz">
          Start Quiz
        </button>
      </div>

      <!-- Active quiz (questions) -->
      <div v-else-if="started && !completed" class="quiz-active">
        <!-- Progress bar -->
        <QuizProgress 
          :currentQuestion="currentQuestionIndex + 1"
          :totalQuestions="quiz.questions.length"
          :percent="progressPercent"
        />

        <!-- Current question -->
        <QuizQuestion 
          :question="currentQuestion"
          :key="currentQuestionIndex"
          :isLastQuestion="progressPercent === 100"
          :initialAnswers="userAnswers[currentQuestion.questionId]"
          showPrevButton
          @answer="handleAnswer"
          @previous="handlePrevious"
        />
      </div>

      <!-- Results -->
      <div v-else-if="completed" class="quiz-results">
        <QuizResults 
          :result="quizResult"
          :quiz="quiz"
          @reset="resetQuiz"
        />

        <!-- Contact form or thank you message -->
        <div v-if="!contactSubmitted && quiz.collectContactInfo" class="mt-5">
          <QuizContactForm 
            @submit="handleContactSubmit"
            @skip="handleContactSkip"
          />
        </div>
        <div v-else class="text-center p-4">
          <div v-html="quiz.successMessage || 'Thank you for completing the quiz!'"></div>

          <div class="mt-4">
            <button class="btn btn-outline-primary me-3" @click="resetQuiz">
              Take Quiz Again
            </button>
            <NuxtLink to="/" class="btn btn-primary">
              Back to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props and route
const {quizSlug } = defineProps({
  quizSlug: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const quizStore = useQuizStore()
const {
  quiz,
  loading,
  error,
  started,
  completed,
  contactSubmitted,
  currentQuestionIndex,
  currentQuestion,
  progressPercent,
  quizResult,
  startTime,
  userAnswers,
} = storeToRefs(quizStore)

const {
  handleAnswer,
  handleContactSubmit,
  handleContactSkip,
  handlePrevious,
  resetQuiz,
  startQuiz
} = useQuizStore()

// Load quiz on component mount
onMounted(async () => {
  const slug = quizSlug || route.params.quiz
  
  if (!slug) {
    error.value = 'Quiz not found. Please check the URL and try again.'
    return
  }
  
  await quizStore.loadQuiz(slug)
})
</script>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quiz-intro, .quiz-results {
  padding: 2rem;
}

.quiz-active {
  padding: 1rem;
}

@media (max-width: 768px) {
  .quiz-container {
    padding: 1rem;
  }
}
</style>