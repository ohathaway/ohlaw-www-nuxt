<template>
  <header id="main-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center fw-medium">
      <NuxtLink class="navbar-brand" to="/">
        <img src="@/assets/img/ohlaw-logo-trans-450.svg" alt="The Law Offices of Owen Hathaway"
      /></NuxtLink>
      <button
        class="navbar-toggler mx-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="collapse navbar-collapse navbar-nav nav-fill mr-auto mt-2" id="navbarToggler">
        <li class="nav-item">
          <a class="nav-link" href="/#lines-of-business">Practice Areas</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://secure.lawpay.com/pages/owen-hathaway/trust"
            target="_blank"
          >
            Make a Payment
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://ohlaw.portal.lawmatics.com/login"
            target="_blank"
          >
            Client Login
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
              Contact Us
          </a>
          <ul class="dropdown-menu">
            <li>
              <a
                class=dropdown-item
                href="mailto:contact@ohlawcolorado.com"
              >
                <font-awesome-icon icon="fas fa-at"></font-awesome-icon>
                &nbsp;&nbsp;&nbsp;
                Email
              </a>
            </li>
            <li>
              <a
                class=dropdown-item
                href="tel:+19708183052"
              >
                <font-awesome-icon icon="fas fa-phone"></font-awesome-icon>
                &nbsp;&nbsp;&nbsp;
                Phone
              </a>
            </li>
            <li>
              <a
                class=dropdown-item
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#bookingModal"
              >
                <font-awesome-icon icon="far fa-calendar-days"></font-awesome-icon>
                &nbsp;&nbsp;&nbsp;
                In Person
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/blog">Learning Resources</NuxtLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="tel:+19708183052">970-818-3052</a>
        </li>
        <!-- Display isn't right. Disabled since the content isn't up to date anyway
    <li class="nav-item">
      <a class="nav-link" href="https://www.facebook.com/ohlawCO/"><i class="fab fa-facebook-f"></i></a>
      <a class="nav-link" href="https://www.linkedin.com/company/22321647/"><i class="fab fa-linkedin-in"></i></a>
      <a class="nav-link" href="https://twitter.com/ohlawCO/"><i class="fab fa-twitter"></i></a>
      <a class="nav-link" href="https://ohlawcolorado.com/feeds/"><i class="fas fa-rss"></i></a>
    </li>
    -->
      </ul>
    </nav>
  </header>
</template>

<script setup>
const dropdownItemClasses = ['dropdown-item']
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  #navbarToggler {
    // padding-right: 20rem;
  }
}
</style>