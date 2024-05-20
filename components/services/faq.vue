<template>
  <div class="accordion pt-5" id="estate-planning-faq">
    <div v-for="(question, index) in questions" :key="index" class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`"
          aria-expanded="true" :aria-controls="`collapse${index}`">
          {{ `${index+1}. ${question.question}` }}
        </button>
      </h2>
      <div :id="`collapse${index}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p v-for="(paragraph, index) in question.answer" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { questions } = defineProps({ questions: Array })
</script>