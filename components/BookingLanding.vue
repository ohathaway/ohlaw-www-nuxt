<template>
  <div class="booking-landing">
    <!-- Hero Section -->
    <section class="hero py-5 text-center">
      <div class="container">
        <h1 class="display-4">{{ pageContent.title }}</h1>
        <p class="lead">{{ pageContent.subtitle }}</p>
      </div>
    </section>

    <!-- Thank You Message -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <h2>Your Appointment is Confirmed</h2>
            <p class="lead">Thank you for scheduling with OH Law.</p>
            <p>You should receive a confirmation email shortly with details about your<br />{{ appointmentTypeLabel }} appointment.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <h5 class="my-5">In the meantime...</h5>
            <p class="mb-4">We need you to do some homework.</p>
            <a class="btn btn-outline-primary p-4 me-5" href="https://app.lawmatics.com/forms/share/d57bebf9-6e6b-4966-b019-bb97036f8594" target="_blank">
              <font-awesome-icon icon="fas fa-laptop-file" size="3x"></font-awesome-icon> 
            </a>
            <a class="btn btn-outline-primary p-4 ms-5" href="/api/documents/Life-and-Legacy-Assessment-and-Inventory-v2.pdf" download="Life-and-Legacy-Assessment-and-Inventory-v2.pdf">
              <font-awesome-icon icon="fas fa-file-pdf" size="3x"></font-awesome-icon> 
            </a>
            <p class="m-md-4">Our work together will be <u>much</u> more productive if you can have this back to us at least 1 week before our session. We're happy to reschedule if you need more time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="text-center">What to Expect</h2>
            <div v-if="pageContent.expectationsList">
              <ul class="expectation-list">
                <li v-for="(item, index) in pageContent.expectationsList" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div v-else>
              <p v-for="(para, index) in pageContent.expectations" :key="index">{{ para }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <LayoutMediaFocus
              :source="pageContent.image"
              provider="cloudflare"
              :title="pageContent.imageAlt || 'Appointment Preparation'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- What to Bring -->
    <section class="py-5 bg-secondary" v-if="pageContent.preparations">
      <div class="container">
        <h2 class="text-center mb-4">How to Prepare</h2>
        <h4 class="text-center text-style-italic mb-4">Do The Homework</h4>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="preparation-cards">
              <div class="row">
                <div class="col-md-4" v-for="(prep, index) in pageContent.preparations" :key="index">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <i :class="`bi ${prep.icon} fs-1 mb-3`"></i>
                      <h4 class="card-title">{{ prep.title }}</h4>
                      <p class="card-text">{{ prep.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5" v-if="pageContent.faq && pageContent.faq.length">
      <div class="container">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <FaqAccordion :faqItems="pageContent.faq" />
      </div>
    </section>

    <!-- Next Steps CTA -->
    <section class="py-5 text-center">
      <div class="container">
        <h2>{{ pageContent.ctaHeading || 'Next Steps' }}</h2>
        <p class="lead">{{ pageContent.ctaText }}</p>
        <div class="mt-4">
          <a v-if="pageContent.ctaButton" :href="pageContent.ctaButton.url" class="btn btn-primary btn-lg me-3">
            {{ pageContent.ctaButton.text }}
          </a>
          <a v-if="pageContent.ctaSecondaryButton" :href="pageContent.ctaSecondaryButton.url" class="btn btn-outline-secondary btn-lg">
            {{ pageContent.ctaSecondaryButton.text }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const appointmentType = ref('');
const appointmentData = ref({});

// Map appointment types to human-readable labels
const appointmentLabels = {
  'check-in': 'Check-In',
  'estate-plan-checkup': 'Estate Plan Checkup',
  'estate-plan-education': 'Life & Legacy Plan Education',
  'estate-plan-design': 'Life & Legacy Plan Design',
  'estate-plan-signing': 'Life & Legacy Plan Signing',
  'estate-plan-delivery': 'Life & Legacy Plan Delivery',
  'new-client': 'New Client Consultation',
  'petition-review-in-person': 'Bankruptcy Petition Review (In-Person)',
  'petition-review-remote': 'Bankruptcy Petition Review (Remote)',
  'gun-trust': 'Gun Trust Consultation'
};

// Determine appointment type from route query parameters
onMounted(() => {
  appointmentType.value = route.query.type || 'new-client';
  
  // Extract any additional data from query params
  const queryParams = { ...route.query };
  delete queryParams.type; // Remove the type since we already processed it
  appointmentData.value = queryParams;
});

// Get the human-readable appointment type label
const appointmentTypeLabel = computed(() => {
  return appointmentLabels[appointmentType.value] || 'Consultation';
});

// Content data for different appointment types
const contentData = {
  'check-in': {
    title: 'Thank You for Checking In',
    subtitle: 'We\'re looking forward to meeting with you shortly.',
    expectations: [
      'Your attorney will be with you shortly. If you have any documents with you that weren\'t previously submitted, please have them ready.',
      'Check-in appointments typically last 15-30 minutes and are designed to review your progress and answer any quick questions you might have.'
    ],
    image: '/img/chair_on_laptop.webp',
    ctaHeading: 'While You Wait',
    ctaText: 'Take a moment to review any questions you might have for your attorney.',
    ctaButton: {
      text: 'Visit Our Blog',
      url: '/blog'
    }
  },
  'estate-plan-checkup': {
    title: 'Estate Plan Checkup Appointment Confirmed',
    subtitle: 'Let\'s make sure your estate plan is still working for you.',
    expectations: [
      'During your Estate Plan Checkup, we\'ll review your existing documents and discuss any changes in your life, assets, or goals that might require updates to your plan.',
      'This appointment typically lasts 45-60 minutes and helps ensure your estate plan continues to protect what matters most to you.'
    ],
    preparations: [
      {
        icon: 'bi-file-earmark-text',
        title: 'Bring Documents',
        description: 'Please bring copies of your current estate planning documents.'
      },
      {
        icon: 'bi-list-check',
        title: 'Note Changes',
        description: 'Make a list of any major life changes since your plan was created.'
      },
      {
        icon: 'bi-question-circle',
        title: 'Prepare Questions',
        description: 'Write down any questions or concerns you have about your current plan.'
      }
    ],
    image: '/img/estatenotebook_1024_smallest.jpg',
    ctaHeading: 'Prepare for Your Appointment',
    ctaText: 'To make the most of your checkup, please review your current estate planning documents before our meeting.',
    ctaButton: {
      text: 'Learn About Estate Planning',
      url: '/services/estate-planning'
    }
  },
  'estate-plan-education': {
    title: 'Life & Legacy Plan Education Session Confirmed',
    subtitle: 'The first step toward protecting your legacy',
    expectationsList: [
      `We\'ll discuss your family situation, assets, and goals to design a customized estate plan`,
      `You\'ll learn about the different estate planning tools available (wills, trusts, powers of attorney, etc.)`,
      `We\'ll outline the process, timeline, and costs for creating your estate plan`,
      `You\'ll have plenty of time to ask questions and get clear answers`,
      `This session typically lasts 60-90 minutes`
    ],
    preparations: [
      {
        icon: 'bi-people',
        title: 'Who You Have',
        description: 'Think about who you have in your life and who should handle your affairs if needed.'
      },
      {
        icon: 'bi-currency-dollar',
        title: 'What You Have',
        description: `Since you've done your homework (you have, haven't you?), we'll have a Family Wealth Inventory prepared to help guide the discussion`
      },
      {
        icon: 'bi-heart',
        title: 'Your Beliefs',
        description: 'Consider what matters most to you in protecting your family and legacy.'
      }
    ],
    image: '/img/estatenotebook_1024_smallest.webp',
    /*
    faq: [
      {
        question: 'How much does an estate plan cost?',
        answer: `The purpose of the education session is to equip you to choose your cost. Our base plans range from $2,000 to $5,500, depending on complexity and the tools required. We\'ll provide a clear quote during your design session based on your specific needs and the options you choose.`
      },
      {
        question: 'How long does the process take?',
        answer: `Our process typically takes 4 - 6 weeks from your education session. We'll provide a more specific timeline based on your situation and needs.`
      },
      {
        question: 'Do I need a trust or is a will sufficient?',
        answer: `This depends on your specific circumstances, goals, and assets. During your education session, we'll help you understand the benefits of each option and recommend the best approach for your situation.`
      }
    ],
    */
    ctaHeading: 'Before Your Session',
    ctaText: `We've designed the homework we've assigned you to help you think about your goals and what you want to accomplish with your estate plan. Completing the homework as best you can helps us tailor your experience to your life and dreams. And if you're worried about costs, we promise that you will be in control of your costs. Our process gives you choices on how to balance cost and effectiveness.`,
    ctaButton: {
      text: 'Learn More About Our Process',
      url: '/services/estate-planning#our-process'
    },
    ctaSecondaryButton: {
      text: 'Read About Estate Planning Issues',
      url: '/blog/categories/legacy-planning'
    }
  },
  'new-client': {
    title: 'New Client Consultation Confirmed',
    subtitle: 'We\'re looking forward to meeting you and discussing how we can help.',
    expectations: [
      'During your consultation, we\'ll discuss your legal needs, answer your questions, and provide guidance on potential next steps.',
      'This appointment typically lasts 30-45 minutes and is designed to help us understand your situation and determine the best way forward.'
    ],
    image: '/img/placeholder_1024.webp',
    ctaHeading: 'Prepare for Your Consultation',
    ctaText: 'To make the most of our time together, please take a moment to gather any relevant documents and write down your key questions.',
    ctaButton: {
      text: 'Learn About Our Services',
      url: '/services'
    }
  },
  'petition-review-in-person': {
    title: 'Bankruptcy Petition Review Confirmed',
    subtitle: 'We\'re ready to review your bankruptcy petition in person',
    expectationsList: [
      'We\'ll go through your bankruptcy petition line by line to ensure accuracy',
      'We\'ll explain what to expect at your 341 meeting with creditors',
      'You\'ll have the opportunity to ask any questions about the bankruptcy process',
      'You\'ll leave with a clear understanding of next steps',
      'This appointment typically lasts 60-90 minutes'
    ],
    preparations: [
      {
        icon: 'bi-file-earmark-text',
        title: 'Bring Documents',
        description: 'Please bring all financial documents, including your draft petition if you have one.'
      },
      {
        icon: 'bi-credit-card',
        title: 'Recent Statements',
        description: 'Bring recent bank and credit card statements.'
      },
      {
        icon: 'bi-pencil-square',
        title: 'List of Questions',
        description: 'Write down any questions or concerns you have about the bankruptcy process.'
      }
    ],
    image: '/img/helpinghand_1024_smallest.jpg',
    ctaHeading: 'Prepare for Your Appointment',
    ctaText: 'To make your petition review as productive as possible, please gather all your financial documents before our meeting.',
    ctaButton: {
      text: 'Learn More About Bankruptcy',
      url: '/services/bankruptcy'
    }
  },
  'petition-review-remote': {
    title: 'Remote Bankruptcy Petition Review Confirmed',
    subtitle: 'We\'re ready to review your bankruptcy petition via video conference',
    expectationsList: [
      'We\'ll connect via secure video conference (a link will be emailed to you)',
      'We\'ll go through your bankruptcy petition to ensure accuracy',
      'We\'ll explain what to expect at your 341 meeting with creditors',
      'You\'ll have the opportunity to ask any questions about the bankruptcy process',
      'This appointment typically lasts 60-90 minutes'
    ],
    preparations: [
      {
        icon: 'bi-laptop',
        title: 'Test Your Equipment',
        description: 'Make sure your computer, camera, and microphone are working properly.'
      },
      {
        icon: 'bi-file-earmark-text',
        title: 'Have Documents Ready',
        description: 'Have all your financial documents accessible during the call.'
      },
      {
        icon: 'bi-person-square',
        title: 'Private Location',
        description: 'Find a quiet, private space for our confidential conversation.'
      }
    ],
    image: '/img/helpinghand_1024_smallest.jpg',
    ctaHeading: 'Prepare for Your Virtual Appointment',
    ctaText: 'Check your email for the video conference link and test your equipment before our meeting.',
    ctaButton: {
      text: 'Learn More About Bankruptcy',
      url: '/services/bankruptcy'
    }
  },
  'gun-trust': {
    title: 'Gun Trust Consultation Confirmed',
    subtitle: 'Protecting your firearms legacy the legal way',
    expectationsList: [
      'We\'ll discuss your specific firearms collection and your goals for protection and transfer',
      'You\'ll learn about the benefits of a gun trust and how it differs from standard trusts',
      'We\'ll explain how a gun trust can help prevent "accidental felonies" and ensure legal compliance',
      'You\'ll understand the process for creating and implementing your gun trust',
      'This consultation typically lasts 45-60 minutes'
    ],
    preparations: [
      {
        icon: 'bi-list-check',
        title: 'Inventory Overview',
        description: 'Have a general idea of your firearms collection (no need for serial numbers yet).'
      },
      {
        icon: 'bi-people',
        title: 'Consider Trustees',
        description: 'Think about who you might want to include as trustees who can use your firearms.'
      },
      {
        icon: 'bi-question-circle',
        title: 'Prepare Questions',
        description: 'Write down any specific questions you have about gun trusts and firearm laws.'
      }
    ],
    image: '/img/gun_trust.webp',
    faq: [
      {
        question: 'Why do I need a specialized gun trust instead of a regular trust?',
        answer: 'A specialized gun trust is designed to comply with federal and state firearm laws, address issues unique to firearm ownership, and help prevent "accidental felonies." It includes provisions for handling NFA items and measures to avoid allowing prohibited persons to possess your firearms.'
      },
      {
        question: 'How much does a gun trust cost?',
        answer: 'Our gun trusts typically cost between $1,000 and $1,500, depending on complexity. We\'ll provide a clear quote during your consultation based on your specific needs and collection.'
      },
      {
        question: 'Can family members use my firearms if they\'re in a trust?',
        answer: 'Yes, properly designated trustees can legally possess and use firearms in the trust, subject to applicable laws. This is one of the key benefits of a gun trust versus individual ownership.'
      }
    ],
    ctaHeading: 'Learn More Before Your Consultation',
    ctaText: 'Explore our gun trust services to get the most out of your upcoming consultation.',
    ctaButton: {
      text: 'Gun Trust Services',
      url: '/services/estate-planning/GunTrusts'
    }
  }
};

// Get content based on appointment type
const pageContent = computed(() => {
  return contentData[appointmentType.value] || contentData['new-client'];
});
</script>

<style scoped lang="scss">
.btn-primary { background-color: #003399 !important; }

.booking-landing {
  padding-top: 80px;
}

.hero {
  background-color: #0056b3;
  color: white;
}

.expectation-list {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;

    &:before {
      content: "\f633";
      font-family: "bootstrap-icons";
      position: absolute;
      left: 0;
      top: 2px;
      color: #0056b3;
    }
  }
}

.preparation-cards .card {
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .bi {
    color: #8A716A;
  }
}

h2 {
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #0056b3;
  }
}

@media (max-width: 768px) {
  .expectation-list li {
    padding-left: 25px;
  }
  
  h2:after {
    width: 40px;
  }
}
</style>