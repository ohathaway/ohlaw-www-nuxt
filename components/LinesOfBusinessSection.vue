<template>
  <section class="container-fluid" id="lines-of-business">
    <EstatePlanningSection image-location="left"></EstatePlanningSection>
    <BankruptcySection image-location="left"></BankruptcySection>
    <SmallBusinessSection image-location="right"></SmallBusinessSection>
    <NonprofitsSection image-location="right"></NonprofitsSection>
  </section>
</template>

<script setup>
import SmallBusinessSection from './SmallBusinessSection.vue'
import NonprofitsSection from './NonprofitsSection.vue'
import EstatePlanningSection from './EstatePlanningSection.vue'
import BankruptcySection from './BankruptcySection.vue'
</script>
