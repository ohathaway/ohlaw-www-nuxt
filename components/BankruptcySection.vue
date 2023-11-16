<template>
  <div>
    <div class="row no-gutters" id="service-bankruptcy">
      <div class="col-lg service-text service-text-left">
        <div class="p-3 pt-lg-5 px-lg-4">
          <h4>Bankruptcy</h4>
          <p class="fw-normal">
            Sometimes life throws obstacles at us that we didn’t expect. Those obstacles can derail
            our financial life and block our view of the things that are important to us. We
            strongly believe that all people should have an opportunity to pursue their dreams
            regardless of the curveballs they’ve been thrown or the financial mistakes they’ve made
            in the past. We created our bankruptcy program to help folks who find themselves stuck
            in a financial situation they can't get out of.
          </p>
          <!--p><a class="btn btn-outline-primary learn-more bankruptcy" data-toggle="collapse" data-target=".service-description.bankruptcy">Learn more</a></p-->
          <button
            class="btn btn-outline-primary"
            data-bs-toggle="collapse"
            data-bs-target="#service-description-bankruptcy"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="col-lg service-img">
        <img src="/img/helpinghand_1024_smallest.jpg" />
      </div>
    </div>
    <div
      class="row service-description bankruptcy bg-white collapse"
      id="service-description-bankruptcy"
    >
      <div class="col-9 p-5">
        <h2>Bankruptcy Services</h2>
        <p class="fw-normal">We are a federally designated debt relief agency. We have carefully chosen several tools to help you with many different types of debt problems. Among those, bankruptcy services are the key tool in our belt. Even if bankruptcy isn't the best option for you, our ability to file a bankruptcy case gives us powerful leverage with creditors who are causing problems for you. All bankruptcy cases start with a court order absolutely stopping all attempts to collect debt. Creditors who disregard that order face contempt of court or sometimes even more extensive sanctions.</p>
        <p class="fw-normal">Even though we have several other tools as well, many of our clients choose bankruptcy for the clean slate it provides the "honest but unfortunate debtor." For folks who have reached the decision to file for bankruptcy protection, we primarily help folks with two different flavors.</p>
        <h3>Chapter 7 Bankruptcy</h3>
        <p class="fw-normal">When someone talks about filing bankruptcy, it's usually a Chapter 7 case that they're thinking about. Some legal resources refer to Chapter 7 cases as "straight bankruptcy." And it is the most straight-forward.</p>
        <p class="fw-normal">In short, everything you owe and everything you own goes into what's called the bankruptcy estate. We use a variety of laws called exemptions to pull the things you own back out of the bankruptcy estate. Most of the time, that leaves nothing left except the debts in the estate. Roughly four months later, a court order discharges those debts and the bankruptcy estate disappears.</p>
        <p class="fw-normal">There can be complications in this process, and it usually isn't possible to dismiss a Chapter 7 case after it's filed. It's important to work with an experienced bankruptcy attorney to make sure you've covered all your bases before filingn a Chapter 7 bankruptcto make sure you've covered all your bases before filingn a Chapter 7 bankruptcy.</p>
        <h3>Chapter 13 Bankruptcy</h3>
        <p class="fw-normal">Sometimes a Chapter 7 bankruptcy isn't available to our client or it will result in an outcome our client doesn't want. In these cases, we look at Chapter 13 for a different approach to bankruptcy</p>
        <p class="fw-normal">In a Chapter 13 case, we don't put everything you own into the bankruptcy estate. Rather, we put your future earnings. This means that you make payments to a trustee for 3 or 5 years. If you make all your payments, you then get a discharge like in a Chapter 7 case.</p>
        <p class="fw-normal">The main reasons our clients might choose a Chapter 13 bankruptcy are either because they've chosen bankruptcy but make too much money to qualify for a Chapter 7, or they own a house that would be lost in a Chapter 7.</p>
        <p class="fw-normal">A Chapter 13 case presents a much more complicated process than Chapter 7. One study found that only 2.3% of Chapter 13 cases filed without an attorney completed successfully. Our experience and expertise allow us to help folks navigate the confusing Chapter 13 process.</p>
      </div>
      <div class="col-3 bg-primary cta-sidebar p-5" id="cta-sidebar-bankruptcy">
        <ContactForm textColor="white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
</script>
