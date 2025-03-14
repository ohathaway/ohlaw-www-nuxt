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
      <ul class="collapse navbar-collapse navbar-nav nav-fill mr-auto mt-2 pe-5" id="navbarToggler">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            area-expanded="false"
          >
            Practice Areas
          </a>
          <div class="dropdown-menu">
            <a :class="dropdownItemClasses" href="/services/estate-planning"> Estate Planning </a>
            <a :class="dropdownItemClasses" href="/services/small-business"> Small Business </a>
            <a :class="dropdownItemClasses" href="/services/bankruptcy"> Bankruptcy </a>
            <a :class="dropdownItemClasses" href="/services/nonprofits"> NonProfits </a>
          </div>
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
