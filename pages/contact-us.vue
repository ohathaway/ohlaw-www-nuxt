<template>
  <main class="contact-us-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 text-center py-5">
            <h1 class="display-4 fw-bold text-primary">Contact Us</h1>
            <h3>There's No Wrong Door</h3>
            <div class="mt-4 lead fs-4">
              <!-- <p>Every law firm claims to be "different." Every law firm claims to care about their clients' needs above all else. Every law firm claims to have "the world's greatest attorneys."</p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scheduling Section -->
    <section class="scheduling-section py-5 bg-light">
      <div class="container sticky-heading-container">
        <h2 class="text-center sticky-heading">Schedule A Consultation</h2>
        <SchedulingCards />
      </div>
    </section>

    <!-- Visit Us Section (with sidebar) -->
    <section id="visit-us" class="visit-us-section py-5 ">
      <div class="container">
        <div class="section-content p-4">
          <h2 class="section-title position-relative text-center pb-3">Visit Us</h2>
          <p class="mb-3">We try real hard to keep our overhead costs focused on things that truly matter. So we do most of our work from home (or wherever we happen to be that day). It's important to be able to meet people in person too, though. That's why we've partnered with <a href="https://www.officeevolution.com/" title="Office Evolution" target="_blank">Office Evolution</a> in order to provide folks the convenience of meeting places nearby. <strong>Just please <a href="#visit-us" @click="openBookingModal">make an appointment</a> so we meet you in the right city!</strong></p>
        </div>
        <div class="row">
          <div class="col-md-8 order-1 order-md-1">
            <div class="p-4">
              <iframe :src="currentMapUrl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="col-md-4 order-0 order-md-2">
            <div class="sidebar-callout bg-secondary text-white p-4 rounded h-100">
              <p class="mb-3">These are the offices we use most frequently.</p>
              <div class="accordion" id="officesAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoco" aria-expanded="true" aria-controls="collapseFoco">
                      Home Base - Fort Collins
                    </button>
                  </h2>
                  <div id="collapseFoco" class="accordion-collapse collapse show" data-bs-parent="#officesAccordion">
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>2580 E Harmony Rd</li>
                        <li>Suite 201</li>
                        <li>Fort Collins, CO 80528</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMetroNorth" aria-expanded="false" aria-controls="collapseMetroNorth">
                      Denver Metro North
                    </button>
                  </h2>
                  <div id="collapseMetroNorth" class="accordion-collapse collapse" data-bs-parent="#officesAccordion">
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>11990 Grant St</li>
                        <li>Suite 550</li>
                        <li>Northglenn, CO 80233</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInterlocken" aria-expanded="false" aria-controls="collapseInterlocken">
                      Broomfield/Interlocken
                    </button>
                  </h2>
                  <div id="collapseInterlocken" class="accordion-collapse collapse" data-bs-parent="#officesAccordion">
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>11001 W 120th Ave</li>
                        <li>Suite 400</li>
                        <li>Broomfield, CO 80021</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phones Section (with cards) -->
    <section class="phone-section py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-3">
            <a :href="formatPhoneNumberForTel(phoneNumbers.voice)">
              <div class="service-card h-100 bg-white shadow-sm rounded">
                <div class="card-body p-4">
                  <div class="icon-wrapper text-center mb-3">
                    <!-- <i class="bi bi-arrow-up-circle text-primary fs-1"></i> -->
                    <font-awesome-icon icon="fas fa-phone" size="2x"></font-awesome-icon>
                  </div>
                  <h3 class="card-title text-center">Call Us</h3>
                  <p class="card-text text-center py-3 fs-3">{{ formatPhoneNumberWithDashes(phoneNumbers.voice) }}</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a :href="formatPhoneNumberForSms(phoneNumbers.sms)">
              <div class="service-card h-100 bg-white shadow-sm rounded">
                <div class="card-body p-4">
                  <div class="icon-wrapper text-center mb-3">
                    <font-awesome-icon icon="fas fa-comment-sms" size="2x"></font-awesome-icon>
                  </div>
                  <h3 class="card-title text-center">Text Us</h3>
                  <p class="card-text text-center py-3 fs-3">{{ formatPhoneNumberWithDashes(phoneNumbers.sms) }}</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a :href="`mailto:${contactEmail}`">
              <div class="service-card h-100 bg-white shadow-sm rounded">
                <div class="card-body p-4">
                  <div class="icon-wrapper text-center mb-3">
                    <font-awesome-icon icon="fas fa-fax" size="2x"></font-awesome-icon>
                  </div>
                  <h3 class="card-title text-center">Email Us</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <div class="service-card h-100 bg-white shadow-sm rounded">
              <div class="card-body p-4">
                <div class="icon-wrapper text-center mb-3">
                  <font-awesome-icon icon="fas fa-fax" size="2x"></font-awesome-icon>
                </div>
                <h3 class="card-title text-center">Fax Us</h3>
                <p class="card-text text-center py-3 fs-3">{{ formatPhoneNumberWithDashes(phoneNumbers.fax) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { contactEmail, phoneNumbers } = useAppConfig()

// Sticky header controls
const isHeadingSticky = ref(false)
let observer = null

onMounted(() => {
  if (process.client) {
    nextTick(() => {
      // Get elements
      const stickyHeading = document.querySelector('.sticky-heading')
      const visitUsSection = document.getElementById('visit-us')
      const visitUsHeading = visitUsSection?.querySelector('h2.section-title')
      
      // Get the actual header height to offset the sticky position
      const siteHeader = document.querySelector('header') // Adjust selector to match your actual header
      const headerHeight = siteHeader ? siteHeader.offsetHeight : 0
      
      if (!stickyHeading || !visitUsSection) return
      
      // Set initial position for calculations
      const schedulingSection = document.querySelector('.scheduling-section')
      const initialHeadingTop = schedulingSection?.offsetTop
      
      // Update sticky state on scroll
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        
        // Calculate when the Visit Us heading reaches the top of the viewport (plus header height)
        const visitUsHeadingTop = visitUsHeading.getBoundingClientRect().top
        const shouldRemoveSticky = visitUsHeadingTop <= headerHeight + 10 // Add small buffer
        
        if (shouldRemoveSticky) {
          // Remove sticky when Visit Us heading is at the top
          if (isHeadingSticky.value) {
            isHeadingSticky.value = false
            stickyHeading.classList.remove('is-sticky')
            stickyHeading.parentElement.style.paddingTop = '0'
          }
        } else if (scrollPosition > initialHeadingTop - headerHeight) {
          // Make sticky after scrolling past the initial position, but before Visit Us heading
          if (!isHeadingSticky.value) {
            isHeadingSticky.value = true
            stickyHeading.classList.add('is-sticky')
            stickyHeading.style.top = `${headerHeight}px`
            stickyHeading.parentElement.style.paddingTop = `${stickyHeading.offsetHeight}px`
          }
        } else {
          // Remove sticky when scrolled to the top
          if (isHeadingSticky.value) {
            isHeadingSticky.value = false
            stickyHeading.classList.remove('is-sticky')
            stickyHeading.style.top = '0'
            stickyHeading.parentElement.style.paddingTop = '0'
          }
        }
      }
      
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll)
      
      // Initial check
      handleScroll()
    })
  }
})

// Clean up on component unmount
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

// Open the booking modal
const openBookingModal = () => {
  // We'll wrap this in a check to only run in browser environment
  if (process.client) {
    // Dynamically import Bootstrap to avoid SSR issues
    import('bootstrap').then(bootstrap => {
      const Modal = bootstrap.Modal
      const modalElement = document.getElementById('bookingModal')
      if (modalElement) {
        const modal = new Modal(modalElement)
        modal.show()
      }
    }).catch(err => {
      console.error('Error loading Bootstrap modal:', err)
    })
  }
}

// Map controls
const addressIframes = {
  foco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8064395418924!2d-105.0348897144356!3d40.52376917544674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eb34d7d55dd11%3A0xcd425b9134c1d587!2sOffice%20Evolution!5e0!3m2!1sen!2sus!4v1741916038680!5m2!1sen!2sus',
  metroNorth: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2495762449034!2d-104.98664062417319!3d39.91343068611849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7591e4a9c9c5%3A0xf801bf8aa6ba55f2!2sOffice%20Evolution%20-%20Metro%20North%2C%20CO!5e0!3m2!1sen!2sus!4v1741916272047!5m2!1sen!2sus',
  interlocken: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1878797991712!2d-105.12557541463585!3d39.91481151262766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8b869076500b%3A0x6134c1f5e6a0c76e!2sOffice%20Evolution%20-%20Broomfield%2C%20CO!5e0!3m2!1sen!2sus!4v1741916375745!5m2!1sen!2sus'
}
// Track the currently active location
const currentLocation = ref('foco')

// Create a computed property for the current map URL
const currentMapUrl = computed(() => {
  return addressIframes[currentLocation.value]
})

// Function to set the current location
const setLocation = (location) => {
  currentLocation.value = location
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const accordionEl = document.getElementById('officesAccordion')
    if (accordionEl) {
      accordionEl.addEventListener('shown.bs.collapse', (event) => {
        // Map collapse IDs to location keys
        const collapseMap = {
          'collapseFoco': 'foco',
          'collapseMetroNorth': 'metroNorth',
          'collapseInterlocken': 'interlocken'
        }
        const collapseId = event.target.id
        if (collapseMap[collapseId]) {
          currentLocation.value = collapseMap[collapseId]
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
.bg-primary { background-color: #003399 !important; }
.contact-us-container {
  // General styles
  section {
    position: relative;
    overflow: hidden;
  }

  .section-title {
    margin-bottom: 1.5rem;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 45%;
      height: 3px;
      width: 70px;
      background-color: #003399;
    }
  }
  .sticky-heading-container {
    position: relative;
  }

  .sticky-heading {
    transition: all 0.3s ease;
    padding: 15px 0;
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    z-index: 100;
    
    &.is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  // Hero section styles
  .hero-section {
    background-color: var(--bs-white);
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/img/business1_1024.webp');
      background-size: cover;
      background-position: center;
      opacity: 0.1;
      z-index: 0;
    }
    
    .container {
      position: relative;
      z-index: 1;
    }
  }

  // Quote callout
  .quote-callout {
    background-color: var(--bs-primary);
    
    .quote-container {
      border-left: 5px solid rgba(255, 255, 255, 0.3);
      border-right: 5px solid rgba(255, 255, 255, 0.3);
    }
  }

  // Service cards
  .service-card {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }

    .card-body {
      height: 220px;
    }
  }

  .phone-section {
    background: #d8d8d8;
  }

  // Testimonial cards
  .testimonial-card {
    position: relative;
    
    .testimonial-content {
      padding-left: 1rem;
      padding-top: 1rem;
    }
  }

  // Feature boxes
  .feature-box {
    height: 100%;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  // Callout styles
  .callout {
    border-left: 4px solid var(--bs-warning);
  }

  // CTA section
  .cta-section {
    background-image: linear-gradient(135deg, var(--bs-primary) 0%, #00245c 100%);
  }
}

// Media queries for responsive design
@media (max-width: 768px) {
  .about-us-container {
    .section-title {
      text-align: center;
      
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>