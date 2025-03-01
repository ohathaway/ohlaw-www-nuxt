<!-- @/components/services/PflPromise.vue -->
<template>
  <section class="pfl-promise" :class="backgroundClass">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card border-0 shadow">
            <div class="card-body p-4 p-md-5">
              <h3 class="text-primary mb-4">Planning That Works</h3>
              <p class="lead mb-4">We create plans that keep your family out of court and out of conflict while protecting everything you care about from predators and the government - keeping it all in your chosen family's hands.</p>
              
              <div class="row mt-5">
                <div class="col-md-6 mb-4">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-calendar-check fs-1 text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <h4>Our 3-Meeting Process</h4>
                      <p>Our structured approach ensures your plan actually gets completed. Far too many estate plans end up unfinished, unsigned, or out-of-date. We've designed our process to overcome procrastination and neglect.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-currency-dollar fs-1 text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <h4>Transparent Flat Fees</h4>
                      <p>You'll never be surprised by an unexpected invoice. All of our fees are flat fees, agreed to in advance, based on your choices, with no surprises, ensuring we stay on the same side of the table every step of the way.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-people fs-1 text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <h4>Relationship-Based Planning</h4>
                      <p>Every Life & Legacy Plan is unique, driven by your personal relationships, family dynamics, assets, risk factors, and budget. We map out the most likely scenarios for you and plan for each as life changes.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-arrow-repeat fs-1 text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <h4>3-Year Review Process</h4>
                      <p>We ensure your plan stays up to date as your life changes. Our review process is designed to maintain the effectiveness of your plan over time, unlike traditional estate planning that often goes stale.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-if="showWhyItMatters" class="bg-light p-4 rounded-3 mt-3">
                <h5 class="mb-3">Why This Matters</h5>
                <p>Planning is something you do for the people you love. By the time those people need the planning you did (or didn't do), you'll either be unable to make decisions for yourself or have passed on. Our approach is about cleaning up the mess you'll leave behind for the people you love, before they have to deal with it themselves.</p>
              </div>
              
              <div v-if="$slots.default" class="mt-4">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'The Personal Family Lawyer Promise'
  },
  background: {
    type: String,
    default: 'light', // Options: light, white, primary, secondary
    validator: (value) => ['light', 'white', 'primary', 'secondary'].includes(value)
  },
  showWhyItMatters: {
    type: Boolean,
    default: true
  }
})

const backgroundClass = computed(() => {
  switch (props.background) {
    case 'light': return 'py-5 bg-light'
    case 'white': return 'py-5'
    case 'primary': return 'py-5 bg-primary text-white'
    case 'secondary': return 'py-5 bg-secondary text-white'
    default: return 'py-5 bg-light'
  }
})
</script>

<style scoped>
.pfl-promise :deep(.text-primary) {
  color: #0056b3 !important;
}

.pfl-promise.bg-primary :deep(.text-primary),
.pfl-promise.bg-secondary :deep(.text-primary) {
  color: white !important;
}

.pfl-promise.bg-primary :deep(.card),
.pfl-promise.bg-secondary :deep(.card) {
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
}

.pfl-promise :deep(.feature-list) {
  list-style: none;
  padding: 0;
}

.pfl-promise :deep(.feature-list li) {
  padding-left: 30px;
  position: relative;
  margin-bottom: 12px;
}

.pfl-promise :deep(.feature-list li:before) {
  content: "\f633";  /* Bootstrap Icons code for checkbox */
  font-family: "bootstrap-icons";
  position: absolute;
  left: 0;
  top: 2px;
  color: #0056b3;
}
</style>