<template>
  <div>
    <div class="row no-gutters" id="service-nonprofit">
      <div class="col-lg m-0 service-text service-text-left">
        <div class="p-3 pt-lg-5 px-lg-4">
          <h4>Nonprofits</h4>
          <p class="fw-normal">
            Lots of business attorneys will do a nonprofit incorporation. Not all of them have
            actually filed a 990, wrestled with UBIT issues, or considered whether a B corp might be
            more appropriate. We believe non profits have an important role to play in our society,
            but we also believe in the proverb, “No margin, no mission.” We can help your nonprofit
            set itself up for long-term, mission-driven sustainability.
          </p>
          <!--p><a class="btn btn-outline-primary learn-more nonprofit" data-toggle="collapse" data-target=".service-description.nonprofit">Learn more</a></p-->
          <button
            class="btn btn-outline-primary"
            data-bs-toggle="collapse"
            data-bs-target="#service-description-nonprofit"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="col-lg m-0 service-img">
        <img src="/img/dotorgtablet_1024_smallest.jpg" />
      </div>
    </div>
    <div
      class="row service-description nonprofit bg-white collapse"
      id="service-description-nonprofit"
    >
      <div class="col-9 p-5">
        <h2>NonProfit Planning Services</h2>
        <p class="fw-normal">
          Planning a nonprofit can be deceptively similar to traditional for-profit business
          planning. Many business attorneys will provide pretty much the same advice to a nonprofit
          startup as they do to any other small business (compare the big online legal services
          nonprofit offerings with their standard business offerings). Then again, many attorneys
          who focus primarily on nonprofits forget the old adage of ‘no margin, no mission.’ In our
          work with both small businesses and nonprofits, we’ve helped organizations that focused
          exclusively on mission, those whose mission required them to think more like an
          entrepreneur, and many in between.
        </p>
        <p class="fw-normal">
          At its core, a nonprofit does face many of the same corporate issues as any other
          business. We certainly know that world. We also have helped folks wrestle with the
          intricacies of giving life to their charitable gift to the world. Is starting a nonprofit
          really the right thing to do? What about giving to an existing foundation or even creating
          your own? Have you thought about B corporations? Many states offer these as an option in
          between nonprofits and traditional business organizations. If you do go the nonprofit
          route, is a 501(c)(3) in your future? If so, how are you going to avoid UBIT while
          creating a sustaining revenue to support the mission?
        </p>
        <p class="fw-normal">
          As part of our commitment to giving back, we include a number of nonprofit-specific
          services in our business formation bundles for nonprofits at the same cost as our standard
          business bundles. If you’re considering making it your life’s work to give back to your
          community, let us help you do it in a way that honors your commitment while putting a
          solid structure in place that leads to mission accomplished.
        </p>
      </div>
      <div class="col-3 bg-primary cta-sidebar p-5" id="cta-sidebar-nonprofit">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
</script>
