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
      <div class="collapse navbar-collapse navbar-nav mr-auto mt-2" id="navbarToggler">
        <div class="nav-item dropdown">
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
            <a :class="dropdownItemClasses" href="/#service-small-business"> Small Business </a>
            <a :class="dropdownItemClasses" href="/#service-nonprofit"> NonProfits </a>
            <a :class="dropdownItemClasses" href="/#service-estate-planning"> Estate Planning </a>
            <a :class="dropdownItemClasses" href="/#service-bankruptcy"> Bankruptcy </a>
          </div>
        </div>
        <a class="nav-item nav-link" href="https://app.clio.com/link/3ARYYeKZ7DfX"
          >Make a Payment</a
        >
        <a class="nav-item nav-link" href="#contact-form">Contact Us</a>
        <a class="nav-item nav-link" href="tel:+19708183052">970-818-3052</a>
        <!-- Display isn't right. Disabled since the content isn't up to date anyway
    <li class="nav-item">
      <a class="nav-link" href="https://www.facebook.com/ohlawCO/"><i class="fab fa-facebook-f"></i></a>
      <a class="nav-link" href="https://www.linkedin.com/company/22321647/"><i class="fab fa-linkedin-in"></i></a>
      <a class="nav-link" href="https://twitter.com/ohlawCO/"><i class="fab fa-twitter"></i></a>
      <a class="nav-link" href="https://ohlawcolorado.com/feeds/"><i class="fas fa-rss"></i></a>
    </li>
    -->
      </div>
    </nav>
  </header>
</template>

<script setup>
const dropdownItemClasses = ['dropdown-item']
</script>
