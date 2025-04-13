<template>
  <main class="main">
    <h1>DIY Estate Planning Quiz</h1>
    <ClientOnly>
      <QuizContainer quizSlug="should-i-diy-my-estate-plan" />
    </ClientOnly>
  </main>
</template>

<script setup>
const quiz = useQuizStore()
</script>