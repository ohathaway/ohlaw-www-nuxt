import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const mainClasses = ref(['main'])
  return {
    mainClasses
  }
})
