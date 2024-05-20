<template>
  <footer class="row p-5">
    <div class="col footer-address">
      <ClientOnly>
        <ul class="list-unstyled">
          <li>
            <font-awesome-icon icon="fas fa-phone"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="tel:+19708183052">
              970-818-3052
            </a>
          </li>
          <li>
            <font-awesome-icon icon="fas fa-fax"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;970-360-7028
          </li>
          <li>
            <font-awesome-icon icon="fas fa-comment-sms"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="sms://+19708185558">
              970-818-5559
            </a>
          </li>
          <li>
            <font-awesome-icon icon="fas fa-file-contract"></font-awesome-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NuxtLink to="/policies">
              Terms and Conditions
            </NuxtLink>
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
    </div>
  </footer>
</template>

<style scoped>
a {
  /* color: v-bind(white); */
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>