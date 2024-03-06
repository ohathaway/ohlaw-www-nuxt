<template>
  <section class="section-1 row">
    <div class="col-lg-6 px-5">
      <LayoutMediaFocus
        source="/img/affordable_and_effective_top_only.webp"
        title="Intersection of Affordability and Effectiveness"
      />
    </div>
    <div class="col-lg-6 py-lg-5 px-5 px-lg-3">
      <p class="mt-lg-5">
        As you can imagine, we get the question "how much should my estate plan cost" quite frequently. It's not an easy question to answer with an exact cost, but we don't like asking people to approve a blank check either. As with everything we do, we promise no surprises. So here's our approach to helping you manage the cost of your legacy-planning.
      </p>
    </div>
  </section>
  <section class="section-2 row">
    <div class="col-12 px-5">
      <h2 class="mb-5 mx-lg-5">Cost-centered decision making doesn't work for estate planning</h2>
      <p class="mx-lg-5">
        Most estate plans fail. Even the most expensive plans from the most prestigious law firms don't actually do what the client wants them to do. This isn't because most estate-planning lawyers don't write good documents or properly inventory their client's estate. It's because life intervenes and things change over time. 
      </p>
      <p class="mx-lg-5">
        Choosing the lowest cost option, like a form you got online or an attorney who quotes you a price over the phone without extensive discovery ensures your plan too will fail. <a href="https://ohlawcolorado.com/blog/5-reasons-why-shopping-for-the-cheapest-estate-plan-could-leave-your-family-with-an-unintended-mess">Read more</a>
      </p>
    </div>
  </section>
  <section class="section-3 px-lg-5">
    <div class="container px-5">
      <h3 class="text-center">Which option is right for you and your family?</h3>
      <p>
        We build plans that actually work for our clients. And we aren't the lowest cost option (neither are we necessarily the most exepensive). We put you in control of what you pay by allowing you to choose your own fees based on what works best for you and your family. We provide a <a href="https://calendly.com/ohlaw-owen/life-legacy-design-session">no-obligation education session</a> to help you understand your choices. We call it the Life and Legacy Planning Session.
      </p>
      <p>Your choices break down into three programs.
        Each of the programs have options for further customization based on your needs.</p>
      <div class="row" id="programs">
        <div class="col-lg-4 py-5">
          <div class="card h-100 level1">
            <div class="card-title px-5 pt-4 bg-light border-bottom">
              <h4>Level 1</h4>
              <h5>Will-Based Plan</h5>
            </div>
            <div class="card-body needs p-lg-4 mb-lg-5">
              <p>
                For the Family Who Wants
                <ul>
                  <li>To guarantee their minor children are well cared for no matter what</li>
                  <li>Their health care wishes turned into directives</li>
                  <li>Their loved ones to have access to their assets if they become incapacitated.</li>
                </ul>
              </p>
            </div>
            <div class="card-body outcomes">
              <p class="border-top">
                Outcomes:
                <ul>
                  <li>A Will, Health Care Directives & Powers of Attorney so you know that you are well taken care of if anything happens</li>
                  <li>A Kids Protection Plan to ensure your children are always raised by the people you want, the way you want and never taken out of your home by the authorities</li>
                  <li>May include post-death trust planning to protect assets for your loved ones.</li>
                </ul>
              </p>
            </div>
            <div class="clard-body price bg-secondary text-white text-center p-4">
              <h5>$1,500 - $3,500</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card level2">
            <div class="card-title px-5 pt-4 border-bottom">
              <h4>Level 2</h4>
              <h5>Trust Plan</h5>
            </div>
            <div class="card-body needs p-lg-4 mb-lg-5">
              <p>
                For the Family Who Wants
                <ul>
                  <li>Total assurance and peace of mind of knowing Family Wealth will be transferred to heirs with the most ease and convenience possible in the privacy of our office without court involvement</li>
                  <li>Education and support on how to implement their plan themselves</li>
                </ul>
                Clients choosing the Trust plan may also opt to protect their beneficiary’s inheritance from lawsuits, spouses, and estate taxes.
              </p>
            </div>
            <div class="card-body outcomes">
              <p class="border-top">
                Outcomes:
                <ul>
                  <li>Peace of mind knowing we are here to guide you during life & care for your family later</li>
                  <li>Keeps loved one’s out of court, all of your affairs private & ensures your family can turn to us when necessary</li>
                  <li>All asset transfers will be handled by you, with unlimited guidance and support from us.</li>
                  <li>A Kids Protection Plan is included if you have minor children.</li>
                </ul>
              </p>
            </div>
            <div class="clard-body price bg-secondary text-white text-center p-4">
              <h5>$3,500 - $5,000</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 py-5">
          <div class="card h-100 level3">
            <div class="card-title px-5 pt-4 border-bottom text-white">
              <h4>Level 3</h4>
              <h5>Wealth Plan</h5>
            </div>
            <div class="card-body needs p-lg-4 mb-lg-5">
              <p>
                For the Family Who Wants
                <ul>
                  <li>Total assurance and peace of mind of the Trust Plan</li>
                  <li>Comfort of knowing assets transfers have been taken care of by our office</li>
                </ul>
                This plan is perfect for busy families who want the least amount of personal effort and the greatest amount of convenience and care.
                <p>WE DO IT ALL FOR YOU!</p>
              </p>
            </div>
            <div class="card-body outcomes">
              <p class="border-top">
                Outcomes:
                <ul>
                  <li>Includes all components of the Trust Plan PLUS we analyze how each of your assets is titled and handle all asset transfers for you to guarantee your plan works for your family</li>
                  <li>We prepare a Family Wealth Inventory, complete all bank, brokerage, insurance and retirement account documents to transfer title and change beneficiaries.</li>
                </ul>
              </p>
            </div>
            <div class="clard-body price bg-secondary text-white text-center p-4">
              <h5>$5,000 - $7,000</h5>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary w-100 my-5"
        :href="scheduleLink"
      >
        <h5>Book A Life and Legacy Planning Session Today</h5>
      </a>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'services'
})

const { schedulingLinks: { newClient: scheduleLink } } = useAppConfig()
</script>

<style lang="scss" scoped>
// .card-body.needs { height: 495px; }
.btn-primary { background: #003399; }
.btn-primary:hover { background: #1c507a; }

.card.level2 > .card-title { background: #6d8cc7;}
.card.level3 > .card-title { background: #244091;}

@media (max-width: 576px) {
  // .card-body.needs { height: 600px; }
}
</style>