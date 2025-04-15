// Revised quizStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import { getQuizBySlug, submitQuizResults as submitQuizResultsMutation } from '~/utils/quizQueries'

export const useQuizStore = defineStore('quiz', () => {
  // State
  const quiz = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const quizSubmissions = ref([])
  const isSubmitting = ref(false)
  const submissionError = ref(null)
  const started = ref(false)
  const completed = ref(false)
  const contactSubmitted = ref(false)
  const currentQuestionIndex = ref(0)
  const userAnswers = ref({})
  const quizResult = ref(null)
  const startTime = ref(null)

  // Getters
  const isQuizLoaded = computed(() => !!quiz.value)

  const progressPercent = computed(() => {
    if (!quiz.value || !quiz.value.questions.length) return 0
    return Math.round(((currentQuestionIndex.value + 1) / quiz.value.questions.length) * 100)
  })

  const currentQuestion = computed(() => {
    if (!quiz.value || !quiz.value.questions.length) return null
    return quiz.value.questions[currentQuestionIndex.value]
  })

  // Actions
  /**
   * Load a quiz by slug
   * @param {string} slug - The slug of the quiz to load
   * @returns {Promise<Object>} - The loaded quiz
   */
  const loadQuiz = async (slug) => {
    loading.value = true
    error.value = null
    
    try {
      const { $apollo } = useNuxtApp()
      
      // Use Apollo client to fetch quiz
      const { data } = await $apollo.defaultClient.query({
        query: getQuizBySlug,
        variables: { slug }
      })
      
      // Check if quiz exists and is active
      const quizData = data?.quizzes?.[0]
      
      if (!quizData) {
        throw new Error('Quiz not found')
      }
      
      if (!quizData.isActive) {
        throw new Error('This quiz is currently unavailable')
      }
      
      // Process and store quiz data
      quiz.value = {
        id: quizData.documentId,
        title: quizData.title,
        slug: quizData.slug,
        description: quizData.description,
        version: quizData.version,
        questions: processQuestions(quizData.questions),
        resultCategories: processResultCategories(quizData.resultCategories),
        defaultCTA: quizData.defaultCTA,
        leadMagnet: quizData.leadMagnet?.url || null,
        collectContactInfo: quizData.collectContactInfo,
        contactFormFields: quizData.contactFormFields || {},
        successMessage: quizData.successMessage
      }
      
      loading.value = false
      return quiz.value
    } catch (err) {
      console.error('Error loading quiz:', err)
      error.value = err.message || 'Failed to load quiz'
      loading.value = false
      throw err
    }
  }

  // Helper functions for processing quiz data
  const processQuestions = (questions) => {
    if (!questions) return []
    
    return [...questions]
      .sort((a, b) => a.id - b.id)
      .map(q => ({
        questionId: q.questionId,
        questionText: q.questionText,
        description: q.description,
        type: q.type,
        required: q.required,
        order: q.order,
        media: q.media?.url,
        answers: processAnswers(q.answers)
      }))
  }

  const processAnswers = (answers) => {
    if (!answers) return []
    
    return answers.map(a => ({
      answerId: a.answerId,
      answerText: a.answerText,
      value: a.value,
      isCorrect: a.isCorrect,
      media: a.media?.url,
      branchToQuestion: a.branchToQuestion
    }))
  }

  const processResultCategories = (resultCategories) => {
    if (!resultCategories) return []
    
    return resultCategories.map(rc => ({
      title: rc.title,
      description: rc.description,
      media: rc.media?.url,
      minScore: rc.minScore,
      maxScore: rc.maxScore,
      criteria: rc.criteria,
      ctaText: rc.ctaText,
      ctaLink: rc.ctaLink
    }))
  }

// Actions
  // Quiz flow methods
  const startQuiz = () => {
    started.value = true
    currentQuestionIndex.value = 0
    userAnswers.value = {}
    quizResult.value = null
    startTime.value = new Date()
  }

  const handleAnswer = (questionId, answer) => {
    // Store answer
    userAnswers.value[questionId] = answer
    
    // Check for branching logic (for future implementation)
    const currentAnswerObj = currentQuestion.value.answers.find(a => 
      a.answerId === (Array.isArray(answer) ? answer[0] : answer)
    )
    
    // If there's branching logic and it's enabled, use it
    if (currentAnswerObj?.branchToQuestion) {
      const branchToIndex = quiz.value.questions.findIndex(
        q => q.order === currentAnswerObj.branchToQuestion
      )
      
      if (branchToIndex !== -1) {
        currentQuestionIndex.value = branchToIndex
        return
      }
    }
  
    // Otherwise, go to next question
    if (currentQuestionIndex.value < quiz.value.questions.length - 1) {
      currentQuestionIndex.value++
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex.value > 0) currentQuestionIndex.value--
  }

  const calculateResult = () => {
    // Simple scoring for now - sum the answer values
    let totalScore = 0
  
    Object.entries(userAnswers.value).forEach(([questionId, answer]) => {
      const question = quiz.value.questions.find(q => q.questionId === questionId)
  
      if (question) {
        if (Array.isArray(answer)) {
          // Multiple choice question
          answer.forEach(a => {
            const answerObj = question.answers.find(ans => ans.answerId === a)
            if (answerObj) totalScore += answerObj.value
          })
        } else {
          // Single choice question
          const answerObj = question.answers.find(ans => ans.answerId === answer)
          if (answerObj) totalScore += answerObj.value
        }
      }
    })
  
    // Find matching result category
    let resultCategory = null
  
    for (const category of quiz.value.resultCategories) {
      // Check if score is within range
      const isInRange = (category.minScore === null || totalScore >= category.minScore) && 
                        (category.maxScore === null || totalScore <= category.maxScore)
  
      if (isInRange) {
        resultCategory = category
        break
      }
    }
  
    // Fallback to first category if no match
    if (!resultCategory && quiz.value.resultCategories.length) {
      resultCategory = quiz.value.resultCategories[0]
    }
  
    // Set result
    quizResult.value = {
      score: totalScore,
      category: resultCategory
    }
  
    // Mark quiz as completed
    completed.value = true
  }


  /**
   * Submit quiz results to Strapi
   * @param {Object} submissionData - The quiz submission data
   * @returns {Promise<Object>} - The submission response
   */
  const submitQuizResults = async (submissionData) => {
    isSubmitting.value = true
    submissionError.value = null
    
    try {
      // Access Nuxt's Apollo client
      const { $apollo } = useNuxtApp()
      
      // Use Apollo client to submit the mutation
      const response = await $apollo.mutate({
        mutation: submitQuizResultsMutation,
        variables: {
          data: {
            quiz: submissionData.quiz,
            quizVersion: submissionData.quizVersion,
            answers: JSON.stringify(submissionData.answers),
            score: submissionData.score,
            resultCategory: submissionData.resultCategory,
            contactInfo: submissionData.contactInfo ? JSON.stringify(submissionData.contactInfo) : null,
            startedAt: submissionData.startedAt,
            submittedToCRM: submissionData.submittedToCRM,
            crmSubmissionId: submissionData.crmSubmissionId || null,
            userAgent: submissionData.userAgent || null
          }
        }
      })
      
      // Store the submission locally
      const submission = response.data.createQuizSubmission.data
      quizSubmissions.value.push(submission)
      
      isSubmitting.value = false
      return submission
    } catch (error) {
      console.error('Error submitting quiz results:', error)
      submissionError.value = 'Failed to submit quiz results. Please try again.'
      isSubmitting.value = false
      throw error
    }
  }

  const handleContactSubmit = async (contactInfo) => {
    try {
      // Submit to Strapi
      await quizStore.submitQuizResults({
        quiz: quiz.value.id,
        quizVersion: quiz.value.version,
        answers: userAnswers.value,
        score: quizResult.value.score,
        resultCategory: quizResult.value.category?.title,
        contactInfo,
        startedAt: startTime.value,
        submittedAt: new Date(),
        submittedToCRM: false,
        userAgent: navigator.userAgent
      })
  
      // Submit to CRM
      const crmSubmitted = await quizStore.submitToCRM(contactInfo, {
        quiz: quiz.value.title,
        score: quizResult.value.score,
        result: quizResult.value.category?.title,
        startedAt: startTime.value,
        completedAt: new Date()
      })
  
      // Update submission with CRM status if needed
      if (crmSubmitted) {
        // Update the submission with CRM ID if available
      }
  
      contactSubmitted.value = true
    } catch (err) {
      console.error('Error submitting quiz results:', err)
      // Show error message
    }
  }

  const handleContactSkip = async () => {
    try {
      // Submit to Strapi without contact info
      await quizStore.submitQuizResults({
        quiz: quiz.value.id,
        quizVersion: quiz.value.version,
        answers: userAnswers.value,
        score: quizResult.value.score,
        resultCategory: quizResult.value.category?.title,
        contactInfo: null,
        startedAt: startTime.value,
        submittedAt: new Date(),
        submittedToCRM: false,
        userAgent: navigator.userAgent
      })
  
      contactSubmitted.value = true
    } catch (err) {
      console.error('Error submitting quiz results:', err)
      // Show error message
    }
  }

  const resetQuiz = () => {
    started.value = false
    completed.value = false
    contactSubmitted.value = false
    currentQuestionIndex.value = 0
    userAnswers.value = {}
    quizResult.value = null
  }
  
  /**
   * Submit quiz results and contact info to CRM
   * @param {Object} contactInfo - The user's contact information
   * @param {Object} quizData - Information about the quiz and results
   * @returns {Promise<boolean>} - Whether the submission was successful
   */
  const submitToCRM = async (contactInfo, quizData) => {
    if (!contactInfo || !contactInfo.email) {
      return false
    }
    
    try {
      // Adapt this to your specific CRM API
      const response = await axios.post('/api/crm/leads', {
        contact: {
          email: contactInfo.email,
          firstName: contactInfo.firstName || '',
          lastName: contactInfo.lastName || '',
          phone: contactInfo.phone || '',
        },
        source: 'Website Quiz',
        quiz: {
          title: quizData.quiz,
          score: quizData.score,
          result: quizData.result,
          startedAt: quizData.startedAt,
          completedAt: quizData.completedAt
        },
        consent: contactInfo.marketingConsent || false
      })
      
      return response.data?.success || false
    } catch (error) {
      console.error('Error submitting to CRM:', error)
      return false
    }
  }
  
  /**
   * Update a quiz submission with CRM submission status
   * @param {string} submissionId - The ID of the quiz submission
   * @param {string} crmSubmissionId - The ID from the CRM system
   * @returns {Promise<boolean>} - Whether the update was successful
   */
  const updateCrmSubmissionStatus = async (submissionId, crmSubmissionId) => {
    try {
      // Use your API client to update the submission
      // This would use a Strapi update mutation
      
      // Update local state
      const submissionIndex = quizSubmissions.value.findIndex(s => s.id === submissionId)
      if (submissionIndex !== -1) {
        quizSubmissions.value[submissionIndex].attributes.submittedToCRM = true
        quizSubmissions.value[submissionIndex].attributes.crmSubmissionId = crmSubmissionId
      }
      
      return true
    } catch (error) {
      console.error('Error updating CRM submission status:', error)
      return false
    }
  }
  
  /**
   * Get analytics for a specific quiz
   * @param {string} quizId - The ID of the quiz
   * @returns {Promise<Object>} - Analytics data
   */
  const getQuizAnalytics = async (quizId) => {
    // This would be implemented later when you add analytics
    // Would fetch submission data and calculate metrics
    return {
      completionRate: 0,
      averageScore: 0,
      resultDistribution: {},
      leadConversionRate: 0
    }
  }


  // Reset state
  const resetQuizState = () => {
    quiz.value = null
    loading.value = false
    error.value = null
  }

  return {
    // State
    completed,
    contactSubmitted,
    currentQuestionIndex,
    error,
    isSubmitting,
    loading,
    quiz,
    quizResult,
    quizSubmissions,
    started,
    startTime,
    submissionError,
    userAnswers,
    
    // Getters
    currentQuestion,
    isQuizLoaded,
    progressPercent,
    
    // Actions
    getQuizAnalytics,
    handleAnswer,
    handleContactSubmit,
    handleContactSkip,
    handlePrevious,
    loadQuiz,
    resetQuiz,
    resetQuizState,
    startQuiz,
    submitQuizResults,
    submitToCRM,
    updateCrmSubmissionStatus,
  }
})