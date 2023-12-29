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
            <!-- Start Lawmatics Embedded Snippet -->
            <component :is="'script'" id="lm-embedded-script">
              !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5),lm_intake("bd7a0579-85cf-42be-9c8d-6b49988ee5b0");
            </component>
            <!-- End Lawmatics Embedded Snippet -->
          </ClientOnly>
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