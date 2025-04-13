<template>
  <div class="quiz-progress mb-4">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <span class="progress-text">Question {{ currentQuestion }} of {{ totalQuestions }}</span>
      <span class="progress-percent">{{ percent }}% Complete</span>
    </div>
    <div class="progress" style="height: 8px;">
      <div 
        class="progress-bar" 
        role="progressbar" 
        :style="{ width: `${percent}%` }" 
        :aria-valuenow="percent" 
        aria-valuemin="0" 
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentQuestion: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  percent: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.quiz-progress {
  padding: 0.5rem 0;
}

.progress-text, .progress-percent {
  font-size: 0.9rem;
  color: #6c757d;
}

.progress-bar {
  background-color: #003399;
  transition: width 0.3s ease;
}
</style>