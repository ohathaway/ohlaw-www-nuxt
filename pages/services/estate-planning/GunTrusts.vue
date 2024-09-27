<template>
  <div class="main">

    <!-- Hero Section -->
    <section class="hero bg-primary text-center py-5">
      <div class="container">
        <h1 class="display-4">Protect Your Firearms Legacy with a Gun Trust</h1>
        <button class="btn btn-primary btn-lg" @click="openNewWindow('https://booking.ohlawcolorado.com/new-client')">Schedule a Free Consultation</button>
      </div>
    </section>

    <!-- What is a Gun Trust? -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>What Is A Gun Trust?</h2>
            <p>As a responsible firearm owner, you already have plans for safe storage, safe transport, safe carry, and safe use. Some day you are going to reach a day when you aren't in charge of your own destiny anymore. Life's journey has the same ending for all of us. You need a plan for your firearms for that day.</p>
            <p>There are two types of firearm legacy plans: the legal way (a gun trust), and the other way (which doesn't necessarily mean illegal, but you fill in the blanks). We help folks design and implement plans the legal way.</p>
            <button class="btn btn-primary btn-lg" @click="openNewWindow('https://booking.ohlawcolorado.com/new-client')">
              Schedule a Confidential Conversation Today
            </button>
          </div>
          <div class="col-md-6">
            <LayoutMediaFocus
              source="/img/gun_trust.webp"
              provider="cloudflare"
              title="Gun Trust"
            />
            <!-- <img src="/img/gun_trust.webp" alt="Gun Trust" class="img-fluid"> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Key Benefits of a Gun Trust -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center">Key Benefits of a Gun Trust</h2>
        <div class="row text-center mt-lg-5">
          <div class="col-md-4">
            <i class="bi bi-shield-check"></i>
            <h4>Legal Compliance</h4>
            <p>Ensure your firearms are managed in compliance with federal and state laws</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-file-earmark-check"></i>
            <h4>Streamlined Process for<br />NFA Items</h4>
            <p>Reduce redundant paperwork and legal requirements for items regulated by the National Firearms Act</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-eye-slash"></i>
            <h4>Privacy</h4>
            <p>Enhance privacy in firearm ownership</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What a Gun Trust Can and Can't Do -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>What a Gun Trust <u>Can</u> Do</h3>
            <ul>
              <li>Legally own and manage NFA firearms (silencers, short-barreled rifles, etc.)</li>
              <li>Allow multiple trustees to possess and use trust-owned firearms</li>
              <li>Simplify the gift of firearms to beneficiaries</li>
              <li>Keep your firearms collection private (unlike probate)</li>
              <li>Potentially reduce liability for accidental misuse</li>
              <li>Provide clear instructions for handling your firearms after you're gone</li>
              <li>Make it easier to transport NFA items across state lines</li>
              <li>Help prevent "accidental felonies"</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>What a Gun Trust <u>Cannot</u> Do</h3>
            <ul>
              <li>Make illegal firearms suddenly legal (sorry, California folks)</li>
              <li>Bypass background checks or waiting periods</li>
              <li>Allow prohibited persons to possess firearms</li>
              <li>Guarantee you'll hit the side of a barn (that's still on you)</li>
              <li>Automatically register firearms across state lines (for folks who must do so)</li>
              <li>Replace proper firearms training and safety practices</li>
              <li>Make you immune to firearms laws and regulations</li>
              <li>Turn you into John Wick (but it might make you feel a bit cooler)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h2 class="mb-md-5">Our Gun Trust Process</h2>
            <Timeline :tl-content="gunTrustTimeline" />
          </div>
            <!--
          <div class="col-lg-5">
            <h2 class="text-center">How Does a Gun Trust Work?</h2>
            <ol>
              <li><strong>Creation:</strong> The trust is established with a legal document crafted by an experienced attorney.</li>
              <li><strong>Funding:</strong> Firearms are transferred into the trust's ownership.</li>
              <li><strong>Management:</strong> Designated trustees can legally access and use the firearms within the trust.</li>
              <li><strong>Compliance:</strong> The trust document includes provisions to ensure ongoing compliance with firearm laws.</li>
              <li><strong>Succession:</strong> Upon the grantor's death, the trust dictates how the firearms are to be handled or distributed.</li>
            </ol>
          </div>
          -->
        </div>
      </div>
    </section>

    <!-- The Dangers of DIY or Kiosk-Generated Gun Trusts -->
    <section class="py-5">
      <div class="container">
        <FaqAccordion :faqItems="gunTrustFaq" />
      </div>
    </section>

    <!-- Footer -->
    <section class="bg-light py-4">
      <div class="container text-center">
        <p>Navigate the legal minefield with fellow enthusiasts who get it. Protect your collection and your rights - without the stuffy lawyer act.</p>
        <button class="btn btn-primary btn-lg" @click="openNewWindow('https://booking.ohlawcolorado.com/new-client')">Talk Guns & Law: Free Consultation</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'OHLaw Gun Trust Services - Protect Your Firearms Legacy',
  meta: [
    {
      name: 'description',
      content: 'Protect your firearms legacy with a legally sound gun trust. Learn what a gun trust is, why you need one, and why you should choose our expert services.'
    }
  ]
})

const gunTrustTimeline = [
  {
    type: 'content',
    info: 'Homework',
    content: [
      `Before we meet for the first time, we need you to do a little homework assignment. This is a short, very general, survey about your needs, worries, and classes of firearms.`
    ]
  },
  {
    type: 'content',
    info: 'Initial Consultation',
    content: [
      `We start with a free, confidential, no-obligation conversation. This is a chance for you to educate yourself on your options and ask lots of questions.`
    ]
  },
  {
    type: 'content',
    info: 'Inventory and Fact Check',
    content: [
      `To make sure we can help you do all the transfers necessary to manage your trust correctly, we need an inventory of your firearms, complete with serial numbers. We like to have pics too.`,
      `We also will confirm all the key details of your specific trust in a confirmation document.`
    ]
  },
  {
    type: 'content',
    info: 'Document Delivery',
    content: [
      `After drafting the documents for your trust, we'll get together to sign everything and train you on how to use your gun trust.`
    ]
  },
  {
    type: 'content',
    info: 'Transfers',
    content: [
      `We'll initially fund your trust with $10 to make it a legally binding trust.`,
      `The next step is the one where we see the most mistakes. You need to actually transfer your firearms into the trusts ownership.`,
      `If you're a gun owner, you know what a transfer is. If you're new to this stuff, we'll explain it to you.`
    ]
  },
  {
    type: 'content',
    info: 'Compliance',
    content: [
      `While it is a part of a comprehensive estate plan, your gun trust is a tool for you to use while you are alive. Gun laws change, seemingly every other week these days. That seems a little often to talk with your attorney, so we make sure to do a check-in annually to keep you up to date and strategize on any changes you need to make.`
    ]
  },
  {
    type: 'content',
    info: 'Succession',
    content: [
      `Everyone's gotta go some day. Your gun trust will include instructions on what to do with your firearms when your day comes. If you have children or grandchildren, your family may not have to do anything. If you want the firearms to be turned into cash, someone will have to do that work.`
    ]
  }
]

const gunTrustFaq = [
  {
    question: 'Why is a gun trust Different from a standard trust?',
    answer:
      `A gun trust:
      <ul>
        <li>Is specifically designed to comply with federal and state firearm laws</li>
        <li>Includes provisions for handling NFA items in compliance with federal law</li>
        <li>Provides for measures to avoid allowing prohibited persons to possess your firearms</li>
        <li>Addresses issues unique to firearm ownership, such as prohibited persons</li>
        <li>Can include instructions for safe handling and storage of firearms</li>
        <li>May require regular review and updates to stay current with changing firearm laws</li>
      </ul>
      `
  },
  {
    question: 'Why does a gun trust need to handle <i>prohibited persons</i>?',
    answer:
      `Both federal and state statutes define a variety of classes of person who is not allowed to possess firearms. Examples include:
      <ul>
        <li>Convicted felons</li>
        <li>Persons with certain mental health conditions</li>
        <li>Drug addicts, including (maybe) marijuana</li>
        <li>Domestic violence offenders</li>
        <li>Dishonorably discharged veterans</li>
        <li>Illegal aliens</li>
      </ul>
      `
  },
  {
    question: 'Are marijuana users <i>prohibited persons</i>?',
    answer:
      `<p>Ready for a lawyer answer? &hellip;</p>
      <p>It depends</p>
      <p>While some states have legalized marijuana use, it remains illegal under federal law. The Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) considers any marijuana user, including those in states where it's legal, to <a href="https://www.atf.gov/news/press-releases/atf-provides-clarification-related-new-minnesota-marijuana-law" title="ATF Provides Clarification Related to New Minnesota Marijuana Law" target="_blank">be a prohibited person</a>. We help you make rules in your gun trust on how to handle prohibited persons, including marijuana users, who might be co-trustees on your trust.</p>
      `
  },
  {
    question: 'What is an <i>accidental felony</i>?',
    answer:
    `<p>We use the term <i>accidental felonies</i> to describe unintentional violations of firearm laws that can result in felony charges. Even honest mistakes can lead to serious legal consequences.</p>
    <p>Common scenarios include:</p>
    <ul>
      <li>Improper handling of NFA items</li>
      <li>Unknowingly allowing a prohibited person to access firearms</li>
      <lu>Unknowingly becoming a prohibited person while possessing a firearm</li>
      <li>Misunderstanding state lines and travel restrictions</li>
      <li>Incorrectly filling out firearms-related forms</li>
    </ul>
    <p>A gun trust can provide insurance against some of these folonies, even if it's only to make sure you don't have to surrender your firearms permanently to the government.</p>
    `
  },
  {
    question: 'Who needs a gun trust?',
    answer:
      `<p>We can make an argument that you need a gun trust if you own more than one firearm. But the folks who really need one are:</p>
      <ul class="list-unstyled">
        <li>Collectors with extensive firearm collections</li>
        <li>Owners of NFA items</li>
        <li>Those who want to create a legacy plan for their firearms collection</li>
        <li>Folks concerned about privacy in firearm ownership</li>
        <li>Gun owners who want to allow family members to use their firearms legally</li>
        <li>Those concerned about potential future changes in the status of family members or other trustees</li>
        <li>Individuals in states with legalized marijuana who want to ensure compliance with both state and federal laws</li>
        <li>Any firearm owner concerned about accidentally violating complex gun laws</li>
      </ul>
      `
  },
    {
      question: 'What are NFA items?',
      answer:
        `<p>The following weapons are regulated under the <a href="https://www.atf.gov/node/29381" title="Firearms - Guides - Importation & Verification of Firearms, Ammunition and Implements of War - ATF Form 4590 - Factoring Criteria for Weapons" target="_blank">National Firearms Act (NFA)</a>:</p>
        <ol>
          <li>A shotgun having a barrel or barrels of less than 18 inches in length;</li>
    <li>A weapon made from a shotgun if such weapon as modified has an overall length of less than 26 inches or a barrel or barrels of less than 18 inches in length;</li>
  <li>A rifle having a barrel or barrels of less than 16 inches in length;</li>
  <li>A weapon made from a rifle if such weapon as modified has an overall length of less than 26 inches or a barrel or barrels of less than 16 inches in length;</li>
  <li>Any other weapon, as defined in subsection (e);</li>
  <li>A machinegun;</li>
  <li>Any silencer (as defined in section 921 of title 18, United States Code); and</li>
  <li>A destructive device.</li>
      `
  }
]
</script>

<style scoped lang="scss">
.main { padding-top: 80px; }

.hero {
  background-image: url('/img/gun_safe_o56.webp');
  background-color: #003399;
  background-size: cover;
  background-position: center;
  color: #FFF8E7;
  padding: 100px 0;

  h1, h2, h3 {
    color: #FFF8E7; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .btn-primary {
    background-color: #D2691E;
    color: #FFFFFF;
    border-color: #D2691E;

    &:hover {
      background-color: darken(#D2691E, 10%);
      border-color: darken(#D2691E, 10%);
    }
  }
}

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-primary:hover {
  background-color: #004494;
  border-color: #004494;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.bi {
  font-size: 3rem;
}

h2, h3, h4, button {
  font-family: Optima;
  font-weight: bold;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
  padding-left: 30px;
  position: relative;
}

ul li:before {
  // content: '\f00c';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  top: 0;
  color: #0056b3;

  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>');
}

.section {
  padding: 60px 0;
}

.section.bg-light {
  background-color: #f8f9fa;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 0;
  }

  .btn-lg {
    width: 100%;
    margin-bottom: 10px;
  }

  ul li {
    padding-left: 25px;
  }

  ul li:before {
    left: 5px;
  }
}
</style>