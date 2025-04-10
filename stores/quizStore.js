// stores/quizStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
// import { submitQuizResults } from '~/utils/quizQueries'

export const useQuizStore = defineStore('quiz', () => {
  // State
  const activeQuiz = ref(null)
  const quizSubmissions = ref([])
  const isSubmitting = ref(false)
  const submissionError = ref(null)

  // Actions
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

  return {
    activeQuiz,
    quizSubmissions,
    isSubmitting,
    submissionError,
    submitQuizResults,
    submitToCRM,
    updateCrmSubmissionStatus,
    getQuizAnalytics
  }
})