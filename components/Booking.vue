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
            <h5 class="modal-title text-center">Book an appointment</h5>
          <!-- </div> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ClientOnly fallback-tag="span" fallback="Loading booking form...">
            <iframe
              ref="bookingFrame" 
              :src="bookingUrl" 
              style="width: 100%; height: 100%; border: none;"
            ></iframe>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { schedulingLinks: { newClient: bookingUrl } } = useAppConfig()
</script>

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