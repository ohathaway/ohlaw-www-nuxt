<script setup lang="ts">
import SchedulingCards from './SchedulingCards.vue'

</script>

<template>
  <div class="modal fade" id="bookingModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header text-center">
          <!-- <div class="row m-0"> -->
            <img
              class="logo-icon"
              src="/assets/img/ohlaw_icon_circle.svg" title="OHLaw"
            />
            <h2 class="modal-title text-center">Which of our services would you like to speak with us about?</h2>
          <!-- </div> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <SchedulingCards />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-body {
  background: #e8e8e8;
}

.logo-icon {
  width: 65px;
  margin-left: 4rem;
  margin-right: 4rem;
}
</style>