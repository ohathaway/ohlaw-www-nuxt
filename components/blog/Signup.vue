<template>
  <div class="blog-signup card mx-5 h-100">
    <div class="row">
      <div class="signup-text col-12 col-lg-6 p-5 text-center">
        <svg class="curve-prompt my-4" height="80" width="175">
          <path id="curve" fill="transparent" d="M 25 75 C 35 20, 140 20, 150 75" />
          <text font-size="24px">
            <textPath xlink:href="#curve">Keep Updated</textPath>
          </text>
          Keep Updated
        </svg>
        <h2 class="mb-4">Don't Miss A Thing!</h2>
        <p class="cta">Sign up to our newsletter today</p>
      </div>
      <div class="col-12 col-lg-6 text-center">
        <div class="card-body pt-5">
          <div class="subscribe-form mx-auto">
            <SignupForm />
          </div>
          <!--
          <img
            src="/img/chair_on_laptop.webp"
            class="w-50"
          />
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-signup {
  // background: url('/img/Newsletter_Signup_portrait.svg') no-repeat;
  background: #d8d8d8;
  .signup-text {
  }
  height: 400px;
  .curve-prompt {
  }
  h2 { font-family: 'Benguiat'; }
  .card-body {
    background: #ffffff !important;
    // background: #ffffff url("/img/chair_on_laptop.webp") !important;
    height: 100%;
      /*
      background: url("/img/chair_on_laptop.webp") no-repeat center;
      background-size: 350px 200px;
      */
  }
}

/* larger */
/* lg */
/*
@media (max-width: 992px) {
  .subscribe-form {
    width: 50%;
  }
}

/* md */
@media (min-width: 576px) {// and (max-width: 768px) {
  .subscribe-form {
    width: 50%;
  }
}

/* sm */
@media (max-width: 576px) {
  .subscribe-form {
    width: 100%;
  }
}
</style>