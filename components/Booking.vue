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
          <div class="row p-0">
            <div class="col-lg-3">
              <div class="card m-3 p-0">
                <a :href="schedulingLinks.estatePlanEducation">
                  <div class="card-body text-center">
                    <h3 class="card-title">Estate Planning</h3>
                  </div>
                  <img
                    class="card-img-bottom object-fit-cover"
                    src="/img/estatenotebook_1024.webp"
                    title="Estate Planning"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card m-3 p-0">
                <a :href="schedulingLinks.newBusinessClient">
                  <div class="card-body text-center">
                    <h3 class="card-title">Small Business</h3>
                  </div>
                  <img
                    class="card-img-bottom object-fit-cover"
                    src="/img/business1_1024.webp"
                    title="Small Business"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card m-3 p-0">
                <a :href="schedulingLinks.newBankruptcyClient">
                  <div class="card-body text-center">
                    <h3 class="card-title">Bankruptcy</h3>
                  </div>
                  <img
                    class="card-img-bottom object-fit-cover"
                    src="/img/helpinghand_1024.webp"
                    title="Bankruptcy"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card m-3 p-0">
                <a :href="schedulingLinks.newNonprofitClient">
                  <div class="card-body text-center">
                    <h3 class="card-title">Nonprofits</h3>
                  </div>
                  <img
                    class="card-img-bottom object-fit-cover"
                    src="/img/dotorgtablet_1024.webp"
                    title="Nonprofits"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { schedulingLinks } = useAppConfig()
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

.card-img-top { height: 200px; }
.card-body {
  // height: 130px;
  overflow: auto;
  .card-text { color: #3a3a3a; }
  @media (max-width: 1025px) {
    height: auto;
    overflow: clip;
  }
}

/*
@media (max-width: 1025px) {
  .card-body {
    width: 225px;
  }
}
*/
</style>