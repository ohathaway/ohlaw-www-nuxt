<template>
  <header id="main-header">
    <ClientOnly>
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
        <div class="collapse navbar-collapse mr-auto mt-2 pe-5" id="navbarToggler">
          <ul class="navbar-nav nav-fill w-100">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="/#lines-of-business"
                role="button"
              >
                Practice Areas
              </a>
              <!--
              <ul class="dropdown-menu">
                <li><a :class="dropdownItemClasses" href="/services/estate-planning"> Estate Planning </a></li>
                <li><a :class="dropdownItemClasses" href="/services/small-business"> Small Business </a></li>
                <li><a :class="dropdownItemClasses" href="/services/bankruptcy"> Bankruptcy </a></li>
                <li><a :class="dropdownItemClasses" href="/services/nonprofits"> NonProfits </a></li>
              </ul>
              -->
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/about-us"
              >
                About Us
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
            <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  to="/contact-us"
                >
                    Contact Us
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/blog">Learning Resources</NuxtLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tel:+19708183052">970-818-3052</a>
              </li>
          </ul>
        </div>
      </nav>
    </ClientOnly>
  </header>
</template>

<script setup>
const dropdownItemClasses = ['dropdown-item']
</script>

<style scoped>
#main-header {
  position: relative;
  z-index: 1030; /* Higher than default Bootstrap content z-index */
}

.dropdown-menu {
  z-index: 1031; /* Higher than the header */
}

/* Maintain original spacing */
.navbar-nav {
  justify-content: space-around;
}
</style>