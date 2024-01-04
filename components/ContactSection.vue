<template>
  <!-- <section class="container-fluid" id="contact-form"> -->
  <section class="container-fluid" id="contact-form">
    <div class="row justify-content-center">
      <div class="col-0 col-lg-6 pb-5 contact-form text-light" id="contact-form">
        <!-- <h2 class="text-center">Get in touch, we'd love to hear from you</h2> -->
        <ContactForm
          :headline="headline"
          serviceFormName="Generic Contact"
          position="row"
        />
        <p></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const headline = 'Get in touch, we\'d love to hear from you'
</script>
