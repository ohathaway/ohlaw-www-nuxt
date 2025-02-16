<template>
  <section class="container-fluid" id="lines-of-business">
    <SmallBusinessSection></SmallBusinessSection>
    <NonprofitsSection></NonprofitsSection>
    <EstatePlanningSection></EstatePlanningSection>
    <BankruptcySection></BankruptcySection>
  </section>
</template>

<script setup>
import SmallBusinessSection from './SmallBusinessSection.vue'
import NonprofitsSection from './NonprofitsSection.vue'
import EstatePlanningSection from './EstatePlanningSection.vue'
import BankruptcySection from './BankruptcySection.vue'
</script>
