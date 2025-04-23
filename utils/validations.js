// Email validation helper
export const isValidEmail = (email, extended = false) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!extended) {
    return re.test(String(email).toLowerCase())
  }
}

/**
 * Validates a phone number input
 * @param {string|number} phoneNumber - The phone number to validate
 * @returns {string|null} Cleaned 10-digit string or null if invalid
 */
export const validatePhoneNumber = phoneNumber => {
  // Convert to string if number is passed
  const phoneStr = String(phoneNumber)
  
  // Remove any non-numeric characters
  const digits = phoneStr.replace(/\D/g, '')
  
  // Validate that we have exactly 10 digits
  if (digits.length !== 10) {
    return null
  }
  
  // Check that the string contains only digits
  if (!/^\d+$/.test(digits)) {
    return null
  }
  
  return digits
}