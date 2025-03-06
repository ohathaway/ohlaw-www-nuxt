<template>
  <main class="main">
    <!-- Hero Section -->
    <ServicesHero
      title="Nonprofit Services<br />That Build Sustainability"
      subtitle="Supporting Your Mission with Practical Legal Solutions"
      buttonText="Schedule Your Free Consultation"
      :button-link="schedulingLinks.newNonprofitClient"
      backgroundImage="/img/dotorgtablet_1024_o20.png"
    />

    <!-- Introduction Section -->
    <ServicesIntro
      title="What Sets Our<br />Nonprofit Services Apart"
      description="<p>Many attorneys treat nonprofits just like any other business. Others focus exclusively on mission without considering sustainability.</p><p>We understand that successful nonprofits need both: a clear mission and the practical foundation to sustain it. We believe in the proverb 'No margin, no mission' and can help your nonprofit set itself up for long-term, mission-driven sustainability.</p>"
      :features="introFeatures"
      imageSource="/img/dotorgtablet_1024_smallest.jpg"
      imageProvider="cloudflare"
      imageTitle="Nonprofit Services"
      buttonText="Get Started Today"
      :button-link="schedulingLinks.newNonprofitClient"
    />

    <!-- Why Nonprofit Legal Support Matters -->
    <ServicesFeatures
      title="Why Nonprofit Legal Support Matters"
      :features="whyItMattersFeatures"
      :columns="3"
      background="light"
    />

    <!-- Our Process Timeline -->
    <ServicesProcess
      id="our-process"
      title="Our Nonprofit Legal Process"
      description="We've developed a comprehensive process to help you establish and maintain a sustainable nonprofit organization."
      :process-steps="tlContent"
    />

    <!-- Nonprofit Services We Offer -->
    <ServicesOfferings
      title="Nonprofit Services We Offer"
      :offerings="servicesOfferings"
      :columns="2"
      background="light"
    />

    <!-- FAQ Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Frequently Asked Questions</h2>
        <FaqAccordion :faqItems="faqItems" />
      </div>
    </section>

    <!-- Call to Action -->
    <ServicesCta
      title="Ready to Build a Sustainable Nonprofit?"
      description="Schedule your consultation today and take the first step toward creating a nonprofit that makes a lasting impact."
      buttonText="Schedule Your Free Consultation"
      :button-link="schedulingLinks.newNonprofitClient"
    />
  </main>
</template>

<script setup>
// Get the scheduling link from app config
const { schedulingLinks } = useAppConfig()

// SEO metadata
useHead({
  title: 'Nonprofit Legal Services | OH Law',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive legal services for nonprofits. We help you establish, maintain, and grow your nonprofit organization with a focus on long-term sustainability and mission fulfillment.'
    }
  ]
})

// Introduction section features
const introFeatures = [
  {
    title: `Mission + Sustainability`,
    description: `We balance your charitable mission with practical business principles.`
  },
  {
    title: `Experienced Guidance`,
    description: `We've helped nonprofits navigate complex legal and tax challenges.`
  },
  {
    title: `Practical Solutions`,
    description: `Our advice is grounded in real-world nonprofit experience.`
  },
  {
    title: `Full-Service Support`,
    description: `From formation to tax compliance, we provide comprehensive guidance.`
  },
  {
    title: `Affordable Options`,
    description: `Our nonprofit services are priced to respect your budget constraints.`
  }
]

// Why Nonprofit Legal Support Matters features
const whyItMattersFeatures = [
  {
    icon: `shield-check`,
    title: `Protect Your Mission`,
    description: `Proper legal structure ensures your organization can fulfill its mission while protecting board members and stakeholders from personal liability.`
  },
  {
    icon: `coin`,
    title: `Tax Advantages`,
    description: `Correctly establishing and maintaining your nonprofit status provides significant tax benefits and fundraising opportunities that support your work.`
  },
  {
    icon: `graph-up`,
    title: `Sustainable Growth`,
    description: `Strategic legal planning helps create a foundation for sustainable growth, allowing your nonprofit to expand its impact over time.`
  }
]

// Nonprofit Services offerings
const servicesOfferings = [
  {
    title: `Nonprofit Formation`,
    description: `Comprehensive support to establish your nonprofit:`,
    features: [
      { text: `Entity selection guidance (501(c)(3), 501(c)(4), etc.)` },
      { text: `State incorporation documents` },
      { text: `Bylaws and governance policies` },
      { text: `IRS Form 1023/1024 preparation and submission` }
    ]
  },
  {
    title: `Alternative Structures`,
    description: `Exploring options beyond traditional nonprofits:`,
    features: [
      { text: `B Corporation formation and certification` },
      { text: `Fiscal sponsorship arrangements` },
      { text: `Donor-advised funds` },
      { text: `Social enterprise models` }
    ]
  },
  {
    title: `Compliance & Governance`,
    description: `Maintaining your nonprofit's legal standing:`,
    features: [
      { text: `Board governance policies and training` },
      { text: `Annual filing requirements (990s, state reports)` },
      { text: `UBIT (Unrelated Business Income Tax) planning` },
      { text: `Conflict of interest and ethics policies` }
    ]
  },
  {
    title: `Ongoing Support`,
    description: `Partner with us for your nonprofit's journey:`,
    features: [
      { text: `Revenue stream diversification strategies` },
      { text: `Fundraising compliance` },
      { text: `Risk management and liability protection` },
      { text: `Strategic partnerships and collaboration agreements` }
    ]
  }
]

// Timeline content
const tlContent = [
  {
    type: 'content',
    info: 'Initial Consultation',
    content: [
      `Our process begins with a thorough consultation to understand your mission and goals:`,
      `• Discuss your nonprofit vision and intended impact`,
      `• Explore your funding model and revenue strategies`,
      `• Assess your timeline and budget constraints`,
      `• Evaluate whether a nonprofit structure is truly the best fit`,
      `• Consider alternatives like fiscal sponsorship or B Corporation status`,
      `This consultation helps ensure we're building the right foundation for your specific needs.`
    ]
  },
  {
    type: 'content',
    info: 'Structure Planning',
    content: [
      `Based on your goals, we'll help you determine the optimal legal structure:`,
      `• Select the appropriate nonprofit classification (501(c)(3), 501(c)(4), etc.)`,
      `• Design a governance structure that supports your mission`,
      `• Develop bylaws that reflect your organization's values and operations`,
      `• Create conflict of interest and other essential policies`,
      `• Plan for sustainable revenue streams that comply with nonprofit regulations`
    ]
  },
  {
    type: 'content',
    info: 'State Formation',
    content: [
      `We'll help you establish your nonprofit at the state level:`,
      `• Prepare and file articles of incorporation or organization`,
      `• Draft comprehensive bylaws that meet state requirements`,
      `• Obtain an Employer Identification Number (EIN)`,
      `• Complete initial state registrations and reports`,
      `• Establish proper board governance structures and procedures`
    ]
  },
  {
    type: 'content',
    info: 'IRS Tax Exemption',
    content: [
      `For most nonprofits, obtaining federal tax exemption is a critical step:`,
      `• Prepare Form 1023 or 1023-EZ (for 501(c)(3) status)`,
      `• Develop your narrative description of activities`,
      `• Create budgets and financial projections`,
      `• Respond to IRS questions and requests for additional information`,
      `• Monitor application progress and maintain communication with the IRS`,
      `This process typically takes 3-12 months, and we'll guide you through each step.`
    ]
  },
  {
    type: 'content',
    info: 'Operational Setup',
    content: [
      `With your legal foundation in place, we'll help you prepare for operations:`,
      `• Develop board meeting procedures and documentation`,
      `• Create essential policies (conflict of interest, whistleblower, document retention)`,
      `• Establish financial controls and procedures`,
      `• Address employment and volunteer management legal issues`,
      `• Set up fundraising compliance systems`
    ]
  },
  {
    type: 'content',
    info: 'Launch & Compliance',
    content: [
      `As you begin operations, we'll ensure you're meeting all legal requirements:`,
      `• Register for charitable solicitation in appropriate states`,
      `• Implement donor acknowledgment procedures`,
      `• Address any specific regulatory requirements for your activities`,
      `• Ensure proper record-keeping and transparency`,
      `• Set up calendars for required filings and renewals`
    ]
  },
  {
    type: 'content',
    info: 'Ongoing Support',
    content: [
      `Your nonprofit's legal needs will evolve as you grow:`,
      `• Annual compliance reviews and filings`,
      `• Guidance on program expansion and new activities`,
      `• Assistance with complex transactions and partnerships`,
      `• Support for major fundraising initiatives`,
      `• Periodic governance reviews and updates`,
      `We can provide ongoing support tailored to your organization's changing needs.`
    ]
  }
]

// FAQ items
const faqItems = [
  {
    question: `Should I form a nonprofit or consider other options?`,
    answer: `Not every charitable mission requires a separate nonprofit entity. Alternatives include fiscal sponsorship, donor-advised funds, or even socially responsible for-profit models like B Corporations. During your consultation, we'll explore whether forming a nonprofit is truly the best approach for your goals, or if another structure might better serve your mission while reducing administrative burden.`
  },
  {
    question: `How long does it take to form a nonprofit and obtain tax-exempt status?`,
    answer: `The timeline varies depending on complexity, but typically: 2-4 weeks for state incorporation, 3-6 months for IRS 501(c)(3) determination with Form 1023-EZ (if you qualify), or 6-12+ months with the full Form 1023. We'll help you understand the specific timeline for your situation and explore options for operating while your application is pending.`
  },
  {
    question: `What's the difference between a 501(c)(3) and other nonprofit designations?`,
    answer: `501(c)(3) organizations (charitable, religious, educational) offer tax deductions for donors and can receive grants from private foundations. Other designations like 501(c)(4) (social welfare), 501(c)(6) (business leagues), or 501(c)(7) (social clubs) have different tax implications and allowable activities. We'll help you select the classification that best fits your mission and operational plans.`
  },
  {
    question: `How do we handle revenue generation while maintaining our nonprofit status?`,
    answer: `Nonprofits can and should generate revenue to sustain their mission. This can include program fees, merchandise sales, events, and other activities. The key is structuring these activities appropriately and understanding when they might generate Unrelated Business Income Tax (UBIT). We can help you develop revenue streams that support your mission while maintaining compliance with nonprofit regulations.`
  },
  {
    question: `What ongoing legal requirements do nonprofits face?`,
    answer: `Nonprofits must maintain compliance with various federal, state, and local requirements including: annual IRS Form 990 filings, state annual reports and charitable solicitation registrations, board governance obligations, public disclosure requirements, and specific regulations related to your activities. We offer ongoing compliance support to ensure these requirements are met efficiently.`
  },
  {
    question: `How much does it cost to form and maintain a nonprofit?`,
    answer: `Initial formation costs typically include legal fees, filing fees (state incorporation and IRS Form 1023), and operational setup expenses. Our nonprofit formation packages start at the same rates as our business formation packages, with additional services available as needed. Ongoing compliance costs vary based on your organization's size and activities. During your consultation, we'll provide transparent pricing based on your specific needs.`
  }
]
</script>

<style scoped>
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

@media (max-width: 768px) {
  h2.text-center:after {
    width: 60px;
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
</style>