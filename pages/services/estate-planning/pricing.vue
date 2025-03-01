<template>
  <main class="main">
    <!-- Hero Section -->
    <section class="hero bg-primary text-center py-5">
      <div class="container">
        <h1 class="display-4">Effective Estate Planning At Affordable and Transparent Pricing</h1>
        <p class="lead">Options designed to fit your needs and budget</p>
        <button class="btn btn-light btn-lg mt-3" @click="openSchedulingLink">Schedule Your Free Consultation</button>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>An Investment in Your Family's Future</h2>
            <p>As you consider estate planning, you're likely wondering about costs. We believe in complete transparency, which is why we've designed three clear pricing tiers based on your specific needs.</p>
            <p>We don't believe in one-size-fits-all solutions or hidden fees. Our approach puts you in control by allowing you to choose the level of service that works best for your family and budget.</p>
            <p>All of our plans are designed with one goal in mind: creating an estate plan that actually works when your family needs it most.</p>
          </div>
          <div class="col-lg-6">
            <LayoutMediaFocus
              source="/2025_01_24_PFL_SMP_National_Unclaimed_Property_Day_Why_Estate_Planning_is_More_Than_Just_Documents_b132f88f8e.webp"
              title="Intersection of Affordability and Effectiveness"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Quality Matters Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Why Quality Matters in Estate Planning</h2>
        <p class="text-center">The true cost of an estate plan isn't what you pay today—it's what your family pays later if your plan fails.</p>
        <p class="text-center">Don't believe us?</p>
        
        <div class="text-center mb-5">
          <a href="https://ohlawcolorado.com/blog/5-reasons-why-shopping-for-the-cheapest-estate-plan-could-leave-your-family-with-an-unintended-mess" class="btn btn-outline-primary" target="_blank">Read More About The Risks of Budget Estate Planning</a>
        </div>
        
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center p-lg-5">
                <i class="bi bi-puzzle fs-1 mb-3 text-warning"></i>
                <h3 class="card-title">The Problem</h3>
                <p class="card-text">Most estate plans fail. Even expensive plans from prestigious firms often don't achieve what clients intended. This happens not because lawyers write poor documents, but because life changes over time and plans aren't maintained.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center p-lg-5">
                <i class="bi bi-shield-slash fs-1 mb-3 text-danger"></i>
                <h3 class="card-title">The Risk</h3>
                <p class="card-text">Choosing the lowest cost option, like online forms or an attorney who quotes prices without proper discovery, virtually guarantees your plan will fail when your family needs it most. The consequences can be costly probate proceedings, family conflicts, and lost assets.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center p-lg-5">
                <i class="bi bi-award fs-1 mb-3 text-success"></i>
                <h3 class="card-title">Our Solution</h3>
                <p class="card-text">We build plans that actually work. We're not the cheapest option (nor necessarily the most expensive). Instead, we offer tiered pricing based on your needs, comprehensive education, and ongoing support to ensure your plan remains effective.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <h2 class="text-center mb-5">Choose the Right Plan for Your Family</h2>
        <p class="text-center mb-5">We put you in control of what you pay by offering three comprehensive programs, each with options for further customization based on your specific needs. Not sure which is right for you? We provide a <a href="#" @click="() => openSchedulingLink('estatePlanEducation')">no-obligation education session</a> called the Life and Legacy Planning Session to help you decide.</p>

        <div class="row">
          <!-- Will-Based Plan -->
          <div class="col-lg-4 mb-4">
            <div class="card h-100 pricing-card">
              <div class="card-header bg-light py-3">
                <h3 class="card-title mb-0 text-center">Will-Based Plan</h3>
              </div>
              <div class="card-body ps-lg-5">
                <div class="text-center mb-4">
                  <span class="display-6">$1,500-$3,500</span>
                </div>
                <h4 class="mb-3">Ideal For:</h4>
                <ul class="feature-list mb-4">
                  <li>Families with minor children who need guardianship provisions</li>
                  <li>Individuals concerned about healthcare decision-making</li>
                  <li>Those with straightforward assets who want essential protection</li>
                </ul>
                <h4 class="mb-3">This Plan Includes:</h4>
                <ul class="feature-list mb-4">
                  <li>Last Will and Testament</li>
                  <li>Healthcare Power of Attorney and Living Will</li>
                  <li>General Durable Power of Attorney</li>
                  <li>HIPAA Authorizations</li>
                  <li>Kids Protection Plan (if applicable)</li>
                  <li>May include post-death trust planning</li>
                </ul>
              </div>
              <div class="card-footer text-center py-3">
                <button class="btn btn-outline-primary btn-lg" @click="openSchedulingLink">Get Started</button>
              </div>
            </div>
          </div>

          <!-- Trust Plan -->
          <div class="col-lg-4 mb-4">
            <div class="card h-100 pricing-card featured">
              <div class="ribbon"><span>Popular</span></div>
              <div class="card-header py-3">
                <h3 class="card-title mb-0 text-center text-light">Trust Plan</h3>
              </div>
              <div class="card-body ps-lg-5">
                <div class="text-center mb-4">
                  <span class="display-6">$3,500-$5,000</span>
                </div>
                <h4 class="mb-3">Ideal For:</h4>
                <ul class="feature-list mb-4">
                  <li>Real estate owners seeking to avoid probate</li>
                  <li>Those wanting privacy in wealth transfer</li>
                  <li>Families willing to implement their plan with guidance</li>
                </ul>
                <h4 class="mb-3">This Plan Includes:</h4>
                <ul class="feature-list mb-4">
                  <li>Revocable Living Trust</li>
                  <li>Pour-Over Will</li>
                  <li>All Core Documents (POAs, Healthcare Directives)</li>
                  <li>Asset Transfer Guidance</li>
                  <li>Optional Beneficiary Protection Provisions</li>
                  <li>Kids Protection Plan (if applicable)</li>
                </ul>
              </div>
              <div class="card-footer text-center py-3">
                <button class="btn btn-primary btn-lg" @click="openSchedulingLink">Get Started</button>
              </div>
            </div>
          </div>

          <!-- Wealth Plan -->
          <div class="col-lg-4 mb-4">
            <div class="card h-100 pricing-card">
              <div class="card-header bg-dark text-white py-3">
                <h3 class="card-title mb-0 text-center text-light">Wealth Plan</h3>
              </div>
              <div class="card-body ps-lg-5">
                <div class="text-center mb-4">
                  <span class="display-6">$5,000-$7,000</span>
                </div>
                <h4 class="mb-3">Ideal For:</h4>
                <ul class="feature-list mb-4">
                  <li>Busy professionals with complex assets</li>
                  <li>Those wanting maximum convenience</li>
                  <li>Families seeking complete professional support</li>
                </ul>
                <h4 class="mb-3">This Plan Includes:</h4>
                <ul class="feature-list mb-4">
                  <li>All Trust Plan Components</li>
                  <li>Complete Asset Transfer Service</li>
                  <li>Family Wealth Inventory</li>
                  <li>Preparation of All Transfer Documents</li>
                  <li>Beneficiary Designation Updates</li>
                  <li>Premium Support and Guidance</li>
                </ul>
              </div>
              <div class="card-footer text-center py-3">
                <button class="btn btn-outline-primary btn-lg" @click="openSchedulingLink">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Always Documents Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Always Documents Package</h2>
        <p>If you aren't ready to dive all the way into estate planning yet, you might consider our Always Documents package. We credit the cost of this package toward your full estate planning package once you're ready to do that work.</p>
        <div class="row align-items-top">
          <div class="col-md-6">
            <div class="card mb-4">
              <div class="card-body p-lg-5">
                <h3 class="card-title mb-4">$600</h3>
                <p class="lead">Essential documents included in EVERY plan</p>
                <ul class="feature-list">
                  <li>Healthcare Power of Attorney</li>
                  <li>Living Will (if desired)</li>
                  <li>HIPAA Authorizations</li>
                  <li>General Durable Power of Attorney</li>
                </ul>
                <p class="mt-3 fst-italic">While you may have existing versions of these documents, we review them to ensure they are current and align with your wishes. We only create new versions if needed.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 p-lg-5">
            <h3>Why These Documents Matter</h3>
            <p>These four essential documents form the foundation of every estate plan we create. I call them the "Always Documents" because I firmly believe every adult should have them in place.</p>
            <p>Without these crucial documents, your family might face expensive and stressful court proceedings to gain the authority to help you when you need it most.</p>
            <p>The "Always Documents" aren't just paperwork - they're peace of mind for you and your loved ones.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Add-On Services -->
    <section class="py-5 bg-white">
      <div class="container">
        <h2 class="text-center mb-5">Optional Add-On Services</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Enhanced Protection</h3>
                <ul class="feature-list">
                  <li><strong>Lifetime Asset Protection Trust</strong> for beneficiaries: $1,000</li>
                  <li><strong>Concierge Asset Transfer Service</strong>: $500-$1,000 (based on asset complexity)</li>
                  <li><strong>Advanced Tax Planning Provisions</strong>: Custom pricing based on needs</li>
                  <li><strong>Special Needs Planning</strong>: Custom pricing based on complexity</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Review Services</h3>
                <ul class="feature-list">
                  <li><strong>Comprehensive 90-point review</strong>: $200
                    <ul>
                      <li>Available for all clients</li>
                      <li>Includes plan update recommendations</li>
                      <li>Opportunity for service upgrades</li>
                    </ul>
                  </li>
                  <li><strong>Three-year review</strong>: Complimentary</li>
                  <li><strong>Brief questions/updates</strong>: No charge</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Rush Services</h3>
                <ul class="feature-list">
                  <li>Available for <i>Always Documents</i>, <i>Simple Wills</i>, and <i>Kids Protection Plans</i> only: <strong>$500 (single) / $750 (married)</strong></li>
                  <li>48-72 hour turnaround</li>
                  <li>Not available for full estate plans</li>
                </ul>
                <p class="mt-3">Regular service timeline: 3-4 weeks from engagement to signing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Situations -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Special Situations</h2>
        <p class="text-center mb-4">Some family situations require specialized planning approaches. We have extensive experience with:</p>
        <div class="row justify-content-center">
          <div class="col-md-3 mb-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="bi bi-people-fill fs-1 mb-3 text-primary"></i>
                <h3 class="card-title">Blended Families</h3>
                <p class="card-text">Ensuring all children are protected while honoring current relationships</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="bi bi-building fs-1 mb-3 text-primary"></i>
                <h3 class="card-title">Business Owners</h3>
                <p class="card-text">Succession planning and business continuation strategies</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="bi bi-cash-coin fs-1 mb-3 text-primary"></i>
                <h3 class="card-title">High Net Worth</h3>
                <p class="card-text">Advanced tax planning and wealth preservation</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="bi bi-heart-pulse fs-1 mb-3 text-primary"></i>
                <h3 class="card-title">Special Needs</h3>
                <p class="card-text">Planning that preserves benefits eligibility while providing support</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <p>These situations typically require specialized consultation. Contact us to discuss your specific needs.</p>
        </div>
      </div>
    </section>

    <!-- Service Standards -->
    <ServicesPflPromise background="primary" />

    <!-- Call to Action -->
    <section class="py-5 bg-secondary text-white text-center">
      <div class="container">
        <h2 class="mb-4 text-light">Ready to Secure Your Family's Future?</h2>
        <p class="lead mb-4">Schedule your free Life and Legacy Planning Session today to discuss which plan is right for you.</p>
        <button class="btn btn-light btn-lg" @click="openSchedulingLink">Schedule Your Free Consultation</button>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'services'
})

// Get the scheduling link from app config
const { openSchedulingLink, getSchedulingUrl } = useScheduling()

// SEO metadata
useHead({
  title: 'Estate Planning Pricing | OH Law',
  meta: [
    {
      name: 'description',
      content: 'Transparent pricing for estate planning services. Choose from will-based plans, trust plans, or comprehensive wealth plans, all designed to protect your legacy.'
    }
  ]
})
</script>

<style scoped lang="scss">
.hero {
  background-image: linear-gradient(rgba(0, 86, 179, 0.8), rgba(0, 86, 179, 0.8)), url('/img/estatenotebook_1024_o20.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 0;
}

h2 {
  color: #0056b3;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  
  &.text-center:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #0056b3;
  }
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .card-title {
    color: #0056b3;
    font-weight: 600;
  }
}

.pricing-card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  
  &.featured {
    border: 2px solid #0056b3;
    position: relative;
    z-index: 1;
    transform: scale(1.05);
    
    .card-header {
      background-color: #0056b3;
      color: white;
    }
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  }
}

// Ribbon for featured plan
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
  
  span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 8px 0;
    background-color: #FF8C00;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    right: -25px;
    top: 30px;
    transform: rotate(45deg);
  }
}

.feature-list {
  list-style: none;
  padding: 0;
  
  li {
    padding-left: 30px;
    position: relative;
    margin-bottom: 12px;
    
    &:before {
      content: "\f633";  /* Bootstrap Icons code for checkbox */
      font-family: "bootstrap-icons";
      position: absolute;
      left: 0;
      top: 2px;
      color: #0056b3;
    }
    
    ul {
      list-style: none;
      padding-left: 20px;
      margin-top: 8px;
      
      li {
        margin-bottom: 6px;
        
        &:before {
          content: "\f26d";  /* Different icon for sub-items */
          color: #6c757d;
        }
      }
    }
  }
  
  &.large li {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
}

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
  
  &:hover {
    background-color: #004494;
    border-color: #004494;
  }
}

.bg-primary {
  background-color: #003399 !important;
}

.bg-light {
  background-color: #d8d8d8 !important;
}

.btn-outline-primary { color: #003399 !important; }

@media (max-width: 992px) {
  .pricing-card.featured {
    transform: scale(1);
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    &:hover {
      transform: translateY(-5px) scale(1);
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  
  h2.text-center:after {
    width: 60px;
  }
}
</style>