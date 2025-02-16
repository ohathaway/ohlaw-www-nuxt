<template>
  <div>
    <main id="policies" class="container-fluid main px-lg-5 py-lg-5">
      <h1>Terms and Conditions</h1>
      <p class="text-start">
        To paraphrase the butler in
        <a href="https://www.youtube.com/watch?v=WiZ8D9akdV4" target="_blank">Indiana Jones and the Last Crusade</a
        >, this is a law firm, and we have many rules. Fortunately they make a lot of sense, and you
        probably already intuitively know how a law firm, attorneys, and attorneys' staff members
        should act. Basically, it's "Do the right thing."
      </p>
      <p class="text-start">
        To learn specifics of what that means in different situations, you can read our policies
        here.
      </p>
      <ul class="list-group horizontal">
        <li class="list-group-item flex-fill">
          <NuxtLink to="/policies/fees">Fees and Other Policies</NuxtLink>
        </li>
        <li class="list-group-item flex-fill">
          <NuxtLink to="/policies/unbundled">Unbundled Services</NuxtLink>
        </li>
        <li class="list-group-item flex-fill">
          <NuxtLink to="/policies/privacy">Privacy Policy</NuxtLink>
        </li>
      </ul>
      <p class="text-start">
        Oh, the one real important thing that may not be real intuitive: reading something on this
        web site does not mean that you have an attorney representing you and giving you legal
        advice. We will always send an engagement letter to a new client. This letter is the only
        way we agree to be your attorney. Ever.
      </p>
    </main>
    <div class="container-fluid" id="contact-form">
      <div class="w-50 mx-auto py-5">
        <ContactForm position="row" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#policies {
  background: #d8d8d8;
  text-align: center;
  padding: 3rem 20rem;
}

#contact-form {
  padding-top: 5.5rem;
  color: #ffffff;
  margin-bottom: -80px;
}
</style>
