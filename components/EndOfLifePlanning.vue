<template>
  <div class="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center mb-6">End-of-Life Planning Quiz</h1>
      <div v-if="showScore">
        <h2 class="text-xl mb-4 text-center">You scored {{ score }} out of {{ questions.length }}</h2>
        <button @click="restartQuiz" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Restart Quiz
        </button>
      </div>
      <div v-else>
        <h2 class="text-lg font-semibold mb-4">Question {{ currentQuestion + 1 }}/{{ questions.length }}</h2>
        <p class="mb-4">{{ questions[currentQuestion].question }}</p>
        <div class="space-y-2">
          <button
            v-for="(option, index) in questions[currentQuestion].options"
            :key="index"
            @click="handleAnswerClick(index)"
            :class="[
              'w-full text-left py-2 px-4 rounded',
              {
                'bg-green-500 text-white': selectedAnswer === index && index === questions[currentQuestion].correctAnswer,
                'bg-red-500 text-white': selectedAnswer === index && index !== questions[currentQuestion].correctAnswer,
                'bg-gray-200': selectedAnswer !== index,
                'hover:bg-gray-300': selectedAnswer === null
              }
            ]"
            :disabled="selectedAnswer !== null"
          >
            {{ option }}
          </button>
        </div>
        <div v-if="showExplanation" class="mt-4 p-4 bg-gray-100 rounded">
          <p>{{ questions[currentQuestion].explanation }}</p>
        </div>
        <div v-if="selectedAnswer !== null" class="mt-4 text-center">
          <button
            @click="handleNextQuestion"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {{ currentQuestion + 1 < questions.length ? 'Next Question' : 'See Results' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const questions = [
  {
    question: "What is a living will?",
    options: [
      "A document that specifies how your assets should be distributed after death",
      "A document that outlines your healthcare wishes if you're incapacitated",
      "A will that you can change at any time",
      "A trust fund for your living relatives"
    ],
    correctAnswer: 1,
    explanation: "A living will is a legal document that specifies your healthcare wishes if you become incapacitated and can't make decisions for yourself."
  },
  {
    question: "What is the main purpose of a power of attorney?",
    options: [
      "To distribute your assets after death",
      "To make medical decisions for you",
      "To make financial and legal decisions on your behalf",
      "To care for your pets after you're gone"
    ],
    correctAnswer: 2,
    explanation: "A power of attorney allows someone you trust to make financial and legal decisions on your behalf if you're unable to do so."
  },
  {
    question: "What is the difference between a will and a trust?",
    options: [
      "A will is for healthcare decisions, a trust is for financial decisions",
      "A will goes through probate, a trust typically avoids probate",
      "A will is free, a trust costs money to set up",
      "A will is legally binding, a trust is just a suggestion"
    ],
    correctAnswer: 1,
    explanation: "A key difference is that a will typically goes through probate (a public court process), while a trust usually avoids probate, potentially saving time and maintaining privacy."
  },
  {
    question: "When should you start end-of-life planning?",
    options: [
      "Only when you're diagnosed with a terminal illness",
      "After retirement",
      "When you turn 65",
      "As soon as you're an adult"
    ],
    correctAnswer: 3,
    explanation: "It's never too early to start end-of-life planning. Even young adults should have basic documents in place, like a healthcare proxy and power of attorney."
  },
  {
    question: "What is an advance directive?",
    options: [
      "A set of instructions for your funeral",
      "A combination of a living will and healthcare power of attorney",
      "A type of life insurance policy",
      "A method for distributing your assets quickly"
    ],
    correctAnswer: 1,
    explanation: "An advance directive typically combines a living will (your healthcare wishes) with a healthcare power of attorney (someone to make decisions for you)."
  }
];

const currentQuestion = ref(0);
const score = ref(0);
const showScore = ref(false);
const selectedAnswer = ref(null);
const showExplanation = ref(false);

const handleAnswerClick = (answerIndex) => {
  selectedAnswer.value = answerIndex;
  showExplanation.value = true;
  if (answerIndex === questions[currentQuestion.value].correctAnswer) {
    score.value++;
  }
};

const handleNextQuestion = () => {
  selectedAnswer.value = null;
  showExplanation.value = false;
  if (currentQuestion.value + 1 < questions.length) {
    currentQuestion.value++;
  } else {
    showScore.value = true;
  }
};

const restartQuiz = () => {
  currentQuestion.value = 0;
  score.value = 0;
  showScore.value = false;
  selectedAnswer.value = null;
  showExplanation.value = false;
};
</script>
