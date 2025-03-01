<template>
  <main class="main">
    <!-- Hero Section -->
    <section class="hero bg-primary text-center py-5">
      <div class="container">
        <h1 class="display-4">Estate Planning That Works<br />For Real People</h1>
        <p class="lead">Protecting Your Legacy and Providing Peace of Mind</p>
        <button class="btn btn-light btn-lg mt-3" @click="openSchedulingLink">Schedule Your Free Consultation</button>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>What Sets Our Estate Planning Services Apart</h2>
            <p>You work hard toward your life’s accomplishments. Whether that includes some measure of wealth, a business legacy, or raising a family you are proud of, the way you pass it all on to the people and causes you care about is an important part of your life’s plan. We can help you express your wishes for what happens to you and your estate when you no longer can express them.</p>
            <ul class="expectation-list">
              <li><strong>Personal Attention</strong>: Your plan is customized to your unique situation and goals.</li>
              <li><strong>Practical Solutions</strong>: We focus on what works in the real world, not just theory.</li>
              <li><strong>Proactive Planning</strong>: We help you anticipate and prevent problems before they arise.</li>
              <li><strong>Plain Language</strong>: We explain complex legal concepts in terms you can understand.</li>
              <li><strong>Ongoing Support</strong>: Estate planning is a process, not a one-time event.</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <LayoutMediaFocus
              source="/img/estatenotebook_1024_smallest.jpg"
              provider="cloudflare"
              title="Estate Planning"
            />
            <div class="text-center mt-4">
              <button class="btn btn-primary btn-lg" @click="openSchedulingLink">Get Started Today</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Estate Planning Matters -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Why Estate Planning Matters</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="bi bi-shield-check fs-1 mb-3"></i>
                <h3 class="card-title">Protect Your Family</h3>
                <p class="card-text">Ensure your loved ones are provided for and avoid family conflicts over your assets. Designate guardians for minor children and dependents with special needs.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="bi bi-coin fs-1 mb-3"></i>
                <h3 class="card-title">Preserve Your Assets</h3>
                <p class="card-text">Avoid probate costs, protect your assets from creditors and minimize taxes. Ensure your hard-earned wealth goes to your chosen beneficiaries.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="bi bi-heart-pulse fs-1 mb-3"></i>
                <h3 class="card-title">Healthcare Decisions</h3>
                <p class="card-text">Make your healthcare wishes known through advance directives. Appoint trusted individuals to make medical decisions if you're unable to do so.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Timeline -->
    <section id="our-process" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Our Estate Planning Process</h2>
        <p class="text-center mb-5">We've developed a streamlined, client-friendly process to make creating your estate plan as simple and stress-free as possible.</p>
        <Timeline :tl-content="tlContent"></Timeline>
      </div>
    </section>

    <!-- Estate Planning Tools -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Some Estate Planning Tools We Offer</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body p-lg-5">
                <h3 class="card-title">Wills</h3>
                <p class="card-text">A will is the foundation of many estate plans. It allows you to:</p>
                <ul>
                  <li>Name beneficiaries for your assets</li>
                  <li>Designate guardians for minor children</li>
                  <li>Appoint an executor to manage your estate</li>
                  <li>Provide instructions for asset distribution</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body p-lg-5">
                <h3 class="card-title">Trusts</h3>
                <p class="card-text">Trusts offer additional benefits beyond wills:</p>
                <ul>
                  <li>Avoid probate and maintain privacy</li>
                  <li>Provide for minor children or beneficiaries with special needs</li>
                  <li>Control asset distribution over time</li>
                  <li>Can be joint plans for both spouses</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body p-lg-5">
                <h3 class="card-title">Specialized Trusts</h3>
                <p class="card-text">We offer specialized trusts for specific situations:</p>
                <ul>
                  <li><a href="/services/estate-planning/gun-trusts">Gun Trusts</a> for firearm owners</li>
                  <li>Special Needs Trusts for beneficiaries with disabilities</li>
                  <li>Pet Trusts for beloved animal companions</li>
                  <li>Spendthrift Trusts for beneficiaries who need protection from creditors and predators</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body p-lg-5">
                <h3 class="card-title">Concierge Trust Funding</h3>
                <p class="card-text">Creating a trust is useless unless you put something in it. We offer:</p>
                <ul>
                  <li>Complete asset transfer management, eliminating the frustration of DIY trust funding</li>
                  <li>Professional handling of complex property titles, financial accounts, and investment transfers</li>
                  <li>Regular progress updates throughout the transfer process to keep you informed</li>
                  <li>Peace of mind knowing your trust is properly funded and will work as intended when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Frequently Asked Questions</h2>
        <FaqAccordion :faqItems="faqItems" />
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white text-center">
      <div class="container">
        <h2 class="mb-4">Ready to Protect Your Legacy?</h2>
        <p class="lead mb-4">Schedule your Life and Legacy Planning Session today and take the first step toward peace of mind.</p>
        <button class="btn btn-light btn-lg" @click="openSchedulingLink">Schedule Your Free Consultation</button>
      </div>
    </section>
  </main>
</template>

<script setup>
// import { useHead } from '@vueuse/head'

// Get the scheduling link from app config
const { schedulingLinks: { newClient: link } } = useAppConfig()

// SEO metadata
useHead({
  title: 'About Our Estate Planning Services | OH Law',
  meta: [
    {
      name: 'description',
      content: 'Learn about our comprehensive estate planning services. We help you protect your legacy, provide for your loved ones, and gain peace of mind through customized estate plans.'
    }
  ]
})

// Function to open scheduling link
const openSchedulingLink = () => {
  window.open(link, '_blank');
}

// Timeline content - expanded from the existing timeline
const tlContent = [
  {
    type: 'content',
    info: 'The Life and Legacy Education Session',
    content: [
      `Our process begins with a free educational session where we help you understand your options and the importance of estate planning. This no-pressure conversation allows you to:`,
      `• Learn about different estate planning tools and strategies`,
      `• Discuss your specific concerns and goals`,
      `• Understand our process and pricing`,
      `• Ask any questions you have about estate planning`,
      `• Make an informed choice`,
      `This session typically lasts 60-90 minutes and can be conducted in person or virtually.`
    ]
  },
  {
    type: 'content',
    info: 'Choose Your Path',
    content: [
      `After your education session, you'll decide which plan option is right for you:`,
      `• Always Documents: Essential documents everyone needs including healthcare power of attorney, living will, HIPAA authorizations, and general durable power of attorney`,
      `• Quick Plan: An efficient solution using streamlined features, including all core documents plus either a Quick Will (for estates without real estate) or Quick Trust (for estates with one real property)`,
      `• Will-Based Plan: Suitable for simple estates without real estate succession complexity, including asset distribution provisions, executor nominations, and basic tax planning`,
      `• Trust-Based Plan: Recommended for real estate owners and families seeking probate avoidance, including a revocable living trust, pour-over will, and transfer deed for primary residence`,
      `• Tax-Planning Trust Plan: Advanced options including QTIP or A/B separate trust analysis and irrevocable trust options`,
      `We respect your timeline and will never pressure you to make a decision before you're ready.`
    ]
  },
  {
    type: 'content',
    info: 'Plan Design',
    content: [
      `If you choose to move forward, we'll schedule a design session to create the blueprint for your estate plan:`,
      `• More homework, we have a planning workbook to help guide the process`,
      `• We'll discuss your family structure, assets, and goals in detail`,
      `• Together, we'll determine which tools (wills, trusts, etc.) are appropriate for your situation`,
      `• We'll address specific concerns such as minor children, blended families, or beneficiaries with special needs`
    ]
  },
  {
    type: 'content',
    info: 'Information Confirmation - CIMI',
    content: [
      `Accuracy is critical in estate planning. Our Confirm, Inventory, Modify, and Inform (CIMI) process ensures your plan is built on solid information:`,
      `• Confirm: We'll verify all the information gathered during your design session`,
      `• Inventory: We'll create a comprehensive inventory of your assets`,
      `• Modify: You'll have the opportunity to make any necessary adjustments`,
      `• Inform: We'll explain how your plan will address your specific goals`,
      `This step helps prevent errors and ensures your plan truly reflects your wishes.`
    ]
  },
  {
    type: 'content',
    info: 'Drafting',
    content: [
      `Using the confirmed information, our attorneys will draft your customized estate planning documents:`,
      `• Each document is tailored to your specific situation`,
      `• We use clear, understandable language whenever possible`,
      `• All documents comply with Colorado law and best practices`,
      `• We complete most drafting within 1-2 weeks of your CIMI session`
    ]
  },
  {
    type: 'content',
    info: 'Signing Ceremony',
    content: [
      `Once your documents are prepared, we'll schedule a signing ceremony:`,
      `• We'll review each document with you to ensure you understand its purpose`,
      `• All documents will be properly executed according to legal requirements`,
      `• We'll serve as witnesses and provide notary services as needed`,
      `• Since we like to create multiple originals of most documents, the signing typically takes about an hour and can be scheduled at your convenience`
    ]
  },
  {
    type: 'content',
    info: 'Delivery and Training',
    content: [
      `After your signing ceremony, we'll prepare your final document package. Once everything is ready, we'll schedule a delivery and training session where:`,
      `• You'll receive organized physical and digital copies of all documents`,
      `• We'll explain how to properly store your documents`,
      `• You'll learn how to communicate your plan to relevant family members and healthcare providers`,
      `• If you haven't chosen our Plan Funding option, we'll provide guidance on any necessary asset retitling or beneficiary designations`
    ]
  },
  {
    type: 'content',
    info: 'Maintenance',
    content: [
      `Estate planning is an ongoing process, not a one-time event:`,
      `• We recommend reviewing your estate plan at least every 3 years or after major life events`,
      `• We offer annual check-in options to ensure your plan remains current`,
      `• Our team is available to answer questions as they arise`,
      `• Subscribe to our newsletter for updates when legal changes affect your estate plan`,
      `This ongoing relationship helps ensure your estate plan continues to serve your needs as your life evolves.`
    ]
  }
]

// FAQ items
const faqItems = [
  {
    question: 'How much does estate planning cost?',
    answer: `Our estate planning services range from $600 for essential documents to $7,000 for complex tax-planning trust arrangements. We offer several tiered options and add-on services you can <a href="/services/estate-planning/pricing">learn more about here</a>.`
  },
  {
    question: 'Do I need a trust or is a will sufficient?',
    answer: `Whether you need a trust depends on your specific circumstances, goals, and assets. A will may be sufficient if you have a relatively simple estate and are comfortable with the probate process. Trusts offer benefits like probate avoidance, privacy, and more control over asset distribution. One important difference for married couples: you cannot create a joint will, but we can create a joint trust. During your consultation, we'll help you understand which tools are most appropriate for your situation.`
  },
  {
    question: 'How long does the estate planning process take?',
    answer: `Most clients complete our estate planning process within 3-6 weeks from the initial consultation to the signing ceremony. However, the timeline can be adjusted based on your schedule and needs. We can expedite the process for urgent situations or extend it if you need more time to make decisions. We believe it's more important to do this job right than to do it fast. <a href="#our-process">Our process</a> ensures we cover your needs the way you want them covered.`
  },
  {
    question: 'What happens if I need to update my estate plan in the future?',
    answer: `Life changes, and your estate plan should evolve accordingly. We recommend reviewing your estate plan every 3-5 years or after major life events (marriage, divorce, birth of children, significant changes in assets, etc.). As our client, you'll have access to our team for questions and updates. We offer maintenance programs to help ensure your plan remains current and effective.`
  },
  {
    question: 'What if I own property in multiple states?',
    answer: `Owning property in multiple states can complicate estate planning. Without proper planning, your heirs might face probate proceedings in each state where you own property. We can help you create a comprehensive plan that addresses multi-state property ownership, potentially using tools like revocable living trusts to avoid multi-state probate issues.`
  },
  {
    question: 'How do I ensure my minor children are protected?',
    answer: `Protecting minor children is one of the most important aspects of estate planning for parents. We have a specific process, called the <a target="_blank" href="https://ohlawco.kidsprotectionplan.com/">Kids Protection Plan</a>, for making sure your plan covers your minor children in case something happens to you.`
  }
]
</script>

<style scoped lang="scss">
.hero {
  background-image: linear-gradient(rgba(0, 86, 179, 0.8), rgba(0, 86, 179, 0.8)), url('/img/estatenotebook_1024_o20.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 0;
}

.expectation-list {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;

    &:before {
      content: "\f633";  /* Bootstrap Icons code for checkbox */
      font-family: "bootstrap-icons";
      position: absolute;
      left: 0;
      top: 2px;
      color: #0056b3;
    }
  }
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}

.card-title {
  color: #0056b3;
  font-weight: 600;
}

.card-body .bi {
  color: #8A716A;
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

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
  
  &:hover {
    background-color: #004494;
    border-color: #004494;
  }
}

.bg-primary {
  background-color: #0056b3 !important;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  
  h2.text-center:after {
    width: 60px;
  }
  
  .card {
    margin-bottom: 20px;
  }
  
  .expectation-list li {
    padding-left: 25px;
  }
}
</style>