import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useMainStore = defineStore('main', () => {
  const mainClasses = ref(['main'])

  const toastError = notification => {
    toast.error(notification.message, { timeout: 5000 })
  }

  const toastSuccess = notification => {
    toast.success(notification.message, { timeout: 5000 })
  }

  return {
    mainClasses,
    toastError,
    toastSuccess
  }
})
