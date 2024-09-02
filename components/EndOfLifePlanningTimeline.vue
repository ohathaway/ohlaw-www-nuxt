<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-8">End-of-Life Planning Timeline</h1>
    <div class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
      <div v-for="(step, index) in timelineSteps" :key="index" class="mb-8 flex justify-center items-center">
        <div 
          :class="[
            'w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10 cursor-pointer',
            { 'bg-green-500': step.completed }
          ]"
          @click="toggleStepDetails(index)"
        >
          {{ index + 1 }}
        </div>
        <div 
          :class="[
            'ml-4 p-4 bg-white shadow-lg rounded-lg w-2/3 transition-all duration-300 ease-in-out',
            { 'opacity-100 max-h-96': step.showDetails, 'opacity-50 max-h-20 overflow-hidden': !step.showDetails }
          ]"
        >
          <h2 class="text-xl font-semibold mb-2">{{ step.title }}</h2>
          <p class="mb-2">{{ step.description }}</p>
          <div v-if="step.showDetails">
            <h3 class="font-semibold mt-2">Key Points:</h3>
            <ul class="list-disc list-inside">
              <li v-for="point in step.keyPoints" :key="point">{{ point }}</li>
            </ul>
            <button 
              @click="toggleStepCompletion(index)" 
              :class="[
                'mt-4 px-4 py-2 rounded',
                step.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600',
                'text-white font-semibold transition-colors duration-300'
              ]"
            >
              {{ step.completed ? 'Completed' : 'Mark as Completed' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const timelineSteps = reactive([
  {
    title: "Start Early",
    description: "Begin end-of-life planning as soon as you're an adult.",
    keyPoints: [
      "It's never too early to start planning",
      "Update your plan as life circumstances change",
      "Involve family members in the discussion"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Create a Will",
    description: "Draft a legal document specifying how you want your assets distributed.",
    keyPoints: [
      "Name an executor to manage your estate",
      "Specify beneficiaries for your assets",
      "Consider including a letter of intent for personal wishes"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Establish Power of Attorney",
    description: "Designate someone to make financial and legal decisions on your behalf if you're unable to do so.",
    keyPoints: [
      "Choose someone you trust implicitly",
      "Consider separate medical and financial powers of attorney",
      "Ensure the document is legally valid in your state"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Create Advance Directives",
    description: "Document your healthcare wishes for end-of-life care.",
    keyPoints: [
      "Include a living will specifying treatment preferences",
      "Designate a healthcare proxy for medical decisions",
      "Discuss your wishes with your doctor and family"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Consider a Trust",
    description: "Set up a trust to manage and distribute your assets, potentially avoiding probate.",
    keyPoints: [
      "Decide between revocable and irrevocable trusts",
      "Name a trustee to manage the trust",
      "Transfer assets into the trust"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Review Beneficiary Designations",
    description: "Ensure your retirement accounts, life insurance, and other assets have up-to-date beneficiaries.",
    keyPoints: [
      "Check all accounts and policies",
      "Update after major life events (marriage, divorce, births)",
      "Ensure designations align with your will and overall plan"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Plan for Digital Assets",
    description: "Include instructions for handling your digital accounts and assets.",
    keyPoints: [
      "Create an inventory of digital accounts",
      "Specify how you want each handled",
      "Consider using a password manager and sharing access"
    ],
    completed: false,
    showDetails: false
  },
  {
    title: "Regular Review and Updates",
    description: "Periodically review and update your end-of-life plan.",
    keyPoints: [
      "Review at least every 3-5 years",
      "Update after major life events",
      "Ensure documents remain legally valid and reflect your current wishes"
    ],
    completed: false,
    showDetails: false
  }
]);

const toggleStepDetails = (index) => {
  timelineSteps[index].showDetails = !timelineSteps[index].showDetails;
};

const toggleStepCompletion = (index) => {
  timelineSteps[index].completed = !timelineSteps[index].completed;
};
</script>
