<template>
  <div class="container-fluid text-center w-100 px-5 mx-auto my-5">
    <h3>Contact Us</h3>
    <p>
      We have so many ways you can reach us. Take your pick below.
    </p>
    <div class="row p-5 align-items-center">
      <div class="col-lg-5 text-end p-4">
        <h4>New client?</h4>
      </div>
      <div class="col-lg-7 text-center p-4">
        <div class="btn btn-primary p-3">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#bookingModal"
          >
            <font-awesome-icon
              icon="far fa-calendar-days"
              size="3x"
            />
            <br />
            Book a consultation
          </a>
        </div>
      </div>
    </div>
    <div class="row p-5 align-items-center">
      <div class="col-lg-5 text-end">
        <h4>How about texting?</h4>
      </div>
      <div class="col-lg-7 text-center">
        <div class="btn btn-primary p-3">
          <a
            href="sms://+19708185558"
          >
            <font-awesome-icon
              :icon="['fas', 'comment-sms']"
              size="3x"
            />
            <br />
            SMS: 970-818-5558
          </a>
        </div>
      </div>
    </div>
    <div class="row p-5 align-items-center">
      <div class="col-lg-5 text-end">
        <h4>Need to call us?</h4>
      </div>
      <div class="col-lg-7 text-center">
        <div class="btn btn-primary p-3">
          <a
            href="tel:+19708183052"
          >
            <font-awesome-icon
              :icon="['fas', 'phone']"
              size="3x"
            />
            <br />
            phone: 970-818-3052
          </a>
        </div>
      </div>
    </div>
    <div class="row p-5 align-items-center">
      <div class="col-lg-5 text-end p-4">
        <h4>Looking for our office?</h4>
      </div>
      <div class="col-lg-7 text-center p-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.3470128411005!2d-105.03080007641029!3d40.523642701587406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eb3529d58bf5d%3A0x2a5cab5ba331609a!2s2580%20E%20Harmony%20Rd%20%23201%2C%20Fort%20Collins%2C%20CO%2080528!5e0!3m2!1sen!2sus!4v1704740356856!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="row px-5 align-items-center">
      <div class="col-lg-5 text-end p-4">
        <h4>Need to mail us something?</h4>
      </div>
      <div class="col-lg-7 p-4">
        <div class="container mx-auto w-50">
          <ul class="list-unstyled ms-5">
            <li>
              <font-awesome-icon icon="fas fa-mail-bulk"></font-awesome-icon>
              &nbsp;&nbsp;&nbsp;<u>Mailing Address:</u>
            </li>
            <li>2601 S. Lemay Ave.</li>
            <li>Suite 7-232</li>
            <li>Fort Collins, CO 80525</li>
          </ul>
        </div>
      </div>
    </div>
  <!--
    - address
    - phone
    - email
    - text
  -->
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #25476e;
    text-decoration: underline;
  }
}

</style>