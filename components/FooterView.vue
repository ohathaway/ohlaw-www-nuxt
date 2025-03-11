<script setup lang="ts">
import TestimonialCarousel from './TestimonialCarousel.vue'

</script>

<template>
  <footer class="row p-5">
    <div class="col footer-address">
      <ClientOnly>
        <h5>Contact Us:</h5>
        <ul class="list-unstyled">
          <li class="my-2">
            <font-awesome-icon icon="fas fa-phone"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="tel:+19708183052">
              970-818-3052
            </a>
          </li>
          <li class="my-2">
            <font-awesome-icon icon="fas fa-fax"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;970-360-7028
          </li>
          <li class="my-2">
            <font-awesome-icon icon="fas fa-comment-sms"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="sms://+19708185558">
              970-818-5559
            </a>
          </li>
          <li class="my-2">
            <font-awesome-icon icon="far fa-calendar-days"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              class="text-white"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#bookingModal"
            >
              In Person
            </a>
          </li>
        </ul>
      </ClientOnly>
    </div>
    <div class="col-sm footer-address">
      <ul class="list-unstyled">
        <li>
          <a href="https://goo.gl/maps/QaDjyDhbHFkbF4iE6" target="_blank">
            <font-awesome-icon icon="fas fa-map" inverse></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;<u>Ft. Collins Office:</u>
          </a>
        </li>
        <li>2580 E Harmony Rd</li>
        <li>Suite 201</li>
        <li>Fort Collins, CO 80528</li>
      </ul>
      <ul class="list-unstyled mt-5">
        <li>
          <font-awesome-icon icon="fas fa-mail-bulk"></font-awesome-icon>
          &nbsp;&nbsp;&nbsp;<u>Mailing Address:</u>
        </li>
        <li>2601 S. Lemay Ave.</li>
        <li>Suite 7-232</li>
        <li>Fort Collins, CO 80525</li>
      </ul>
    </div>
    <div class="col-sm">
      <ClientOnly>
        <h5>Useful Links:</h5>
        <ul class="list-unstyled">
          <li class="my-1">
            <font-awesome-icon icon="fas fa-credit-card"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://secure.lawpay.com/pages/owen-hathaway/trust"
              title="Make a Payment"
              target="_blank"
            >
              Make a Payment
            </a>
          </li>
          <li class="my-1">
            <font-awesome-icon icon="fas fa-file-contract"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="/policies">
              Our Terms and Conditions
            </NuxtLink>
          </li>
          <li class="my-1">
            <font-awesome-icon icon="fas fa-external-link"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="https://www.coloradojudicial.gov/self-help-forms" target="_blank">
              Colorado Courts Self-Help Forms
            </NuxtLink>
          </li>
          <li class="my-1">
            <font-awesome-icon icon="fas fa-external-link"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="https://www.211colorado.org/" target="_blank" title="211 Colorado streamlines services and provides one central location where people can get connected to the resources they need. With a database that is updated daily, 211 Colorado can connect you to critical resources simply by dialing a three-digit number. Whether you are searching for a shelter availability, childcare, or rent payment assistance – 211 can connect you to available resources in your community.">
              211 Colorado - database of resources
            </NuxtLink>
          </li>
          <li class="my-1">
            <font-awesome-icon icon="fas fa-external-link"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="https://www.healthfirstcolorado.com/" target="_blank">
              Health First Colorado (Medicaid)
            </NuxtLink>
          </li>
          <li class="my-1">
            <font-awesome-icon icon="fas fa-external-link"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="https://www.sciencecare.com/" target="_blank">
              Science Care - donate your body
            </NuxtLink>
          </li>
        </ul>
      </ClientOnly>
    </div>
    <div class="col-sm">
      <TestimonialCarousel />
    </div>
  </footer>
</template>

<style scoped>
a {
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>