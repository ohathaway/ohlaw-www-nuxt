// utils/quizQueries.js

/**
 * GraphQL query to get a quiz by slug
 */
export const getQuizBySlug = gql`
  query getQuizBySlug($slug: String!) {
    quizzes(filters: { slug: { eq: $slug } }) {
      defaultCTA
      collectContactInfo
      contactFormFields
      successMessage
      documentId
      createdAt
      updatedAt
      publishedAt
      leadMagnet {
        documentId
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      questions {
        questionText
        description
        type
        questionId
        required
        order
        media {
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          previewUrl
          provider
          provider_metadata
          createdAt
          updatedAt
          publishedAt
        }
        answers {
          answerText
          value
          answerId
          isCorrect
          branchToQuestion
          media {
            name
            alternativeText
            caption
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            previewUrl
            provider
            provider_metadata
            createdAt
            updatedAt
            publishedAt
          }
        }
      }
      isActive
      version
      description
      slug
      title
      resultCategories {
        title
        description
        minScore
        maxScore
        criteria
        ctaText
        ctaLink
        media {
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          previewUrl
          provider
          provider_metadata
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`

/**
 * GraphQL mutation to submit quiz results
 */
export const submitQuizResults = gql`
  mutation submitQuizResults($data: QuizSubmissionInput!) {
    createQuizSubmission(data: $data) {
      data {
        id
        attributes {
          quiz {
            data {
              id
            }
          }
          quizVersion
          score
          resultCategory
          submittedAt
          submittedToCRM
          crmSubmissionId
        }
      }
    }
  }
`

/**
 * GraphQL query to get all active quizzes
 * Useful for displaying available quizzes to users
 */
export const getActiveQuizzes = gql`
  query getActiveQuizzes {
    quizzes(filters: { isActive: { eq: true } }) {
      data {
        id
        attributes {
          title
          slug
          description
        }
      }
    }
  }
`

/**
 * GraphQL query to get quiz submissions
 * Useful for analytics or admin dashboard
 */
export const getQuizSubmissions = gql`
  query getQuizSubmissions($quizId: ID, $limit: Int) {
    quizSubmissions(
      filters: { quiz: { id: { eq: $quizId } } }
      pagination: { limit: $limit }
      sort: "submittedAt:desc"
    ) {
      data {
        id
        attributes {
          quizVersion
          score
          resultCategory
          submittedAt
          submittedToCRM
        }
      }
    }
  }
`

/**
 * GraphQL mutation to update a quiz submission
 * Useful for updating CRM status after submission
 */
export const updateQuizSubmission = gql`
  mutation updateQuizSubmission($id: ID!, $data: QuizSubmissionInput!) {
    updateQuizSubmission(id: $id, data: $data) {
      data {
        id
        attributes {
          submittedToCRM
          crmSubmissionId
        }
      }
    }
  }
`