<template>
  <div>
    <LayoutAppHeader />
    <!-- Header -->
    <!--
    <header class="flex items-center justify-between p-4">
      <div class="logo">
        <NuxtImg src="/img/ohlaw_only.svg" alt="Firm Logo" width="180" />
      </div>
      <nav class="">
        <ul class="flex gap-6 content-end">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/services">Services</NuxtLink>
          </li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/resources">Resources</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <NuxtLink to="/login">
          <UButton>Login</UButton>
        </NuxtLink>
      </div>
    </header>
    -->

    <!-- Hero Section -->
    <section class="hero relative text-center text-white">
      <div class="hero-background absolute inset-0">
        <NuxtImg src="/placeholder-hero.jpg" alt="Legal Theme Background" fill />
      </div>
      <div class="hero-content relative py-20 px-4">
        <h1 class="text-4xl font-bold">Your Firm Name</h1>
        <p class="mt-4 text-xl">Committed to excellence in legal services</p>
        <div class="mt-8 flex justify-center gap-4">
          <NuxtLink to="/consultation">
            <UButton type="primary">Schedule a Consultation</UButton>
          </NuxtLink>
          <NuxtLink to="/client-portal">
            <UButton>Client Portal Login</UButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-4">
      <h2 class="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div class="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <UCard v-for="service in services" :key="service.id">
          <template #header>
            <NuxtImg :src="service.icon" :alt="service.title" width="64" height="64" />
          </template>
          <template #body>
            <h3 class="text-xl font-medium mt-4">{{ service.title }}</h3>
            <p class="mt-2">{{ service.description }}</p>
          </template>
          <template #footer>
            <NuxtLink :to="service.link">
              <UButton>Learn More</UButton>
            </NuxtLink>
          </template>
        </UCard>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about flex flex-col md:flex-row items-center py-16 px-4">
      <div class="about-image md:w-1/2">
        <NuxtImg src="/placeholder-team.jpg" alt="Team Image" />
      </div>
      <div class="about-text md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <h2 class="text-3xl font-semibold">About Us</h2>
        <p class="mt-4">
          A concise introduction to your firm, values, and unique approach.
        </p>
        <NuxtLink to="/about" class="mt-4 inline-block">
          <UButton>Meet the Team</UButton>
        </NuxtLink>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-16 px-4 bg-gray-100">
      <h2 class="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <div class="testimonial-cards grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="testimonial in testimonials" :key="testimonial.id">
          <template #header>
            <NuxtImg :src="testimonial.avatar" alt="Client Avatar" width="48" height="48" class="rounded-full" />
          </template>
          <template #body>
            <p class="italic">"{{ testimonial.quote }}"</p>
            <p class="mt-2 font-medium">— {{ testimonial.name }}</p>
          </template>
        </UCard>
      </div>
      <div class="text-center mt-8">
        <NuxtLink to="/testimonials">
          <UButton>View More</UButton>
        </NuxtLink>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog py-16 px-4">
      <h2 class="text-3xl font-semibold text-center mb-8">From Our Blog</h2>
      <div class="blog-cards grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="post in blogPosts" :key="post.id">
          <template #header>
            <NuxtImg :src="post.image" :alt="post.title" width="300" height="200" />
          </template>
          <template #body>
            <h3 class="text-xl font-medium mt-4">{{ post.title }}</h3>
            <p class="mt-2">{{ post.excerpt }}</p>
          </template>
          <template #footer>
            <NuxtLink :to="`/blog/${post.id}`">
              <UButton>Read More</UButton>
            </NuxtLink>
          </template>
        </UCard>
      </div>
    </section>

    <!-- Payment and Resources Section -->
    <section class="payment-resources py-16 px-4 flex flex-col md:flex-row justify-around items-center">
      <NuxtLink to="/payment">
        <UButton type="primary">Make a Payment</UButton>
      </NuxtLink>
      <NuxtLink to="/resources">
        <UButton>Free Legal Resources</UButton>
      </NuxtLink>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-200 py-8 px-4 text-center">
      <div class="footer-links mb-4">
        <NuxtLink to="/" class="mx-2">Home</NuxtLink>
        <NuxtLink to="/services" class="mx-2">Services</NuxtLink>
        <NuxtLink to="/blog" class="mx-2">Blog</NuxtLink>
        <NuxtLink to="/contact" class="mx-2">Contact</NuxtLink>
      </div>
      <div class="social-media mb-4">
        <a href="https://linkedin.com" target="_blank">
          <UIcon name="linkedin" size="24" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <UIcon name="instagram" size="24" />
        </a>
      </div>
      <div class="contact-info mb-4">
        <p>Email: info@yourfirm.com | Phone: (123) 456-7890</p>
      </div>
      <div class="copyright">
        <p>© 2025 Your Firm Name</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Define services with placeholder icons and links
const services = ref([
  {
    id: 1,
    title: 'Small Business Legal Services',
    description: 'Tailored legal solutions for small businesses.',
    icon: '/placeholder-service1.png',
    link: '/services/small-business'
  },
  {
    id: 2,
    title: 'Estate Planning',
    description: 'Comprehensive estate planning for your future.',
    icon: '/placeholder-service2.png',
    link: '/services/estate-planning'
  },
  {
    id: 3,
    title: 'Non-Profit Law',
    description: 'Legal guidance for non-profit organizations.',
    icon: '/placeholder-service3.png',
    link: '/services/non-profit'
  },
  {
    id: 4,
    title: 'Bankruptcy',
    description: 'Expert advice and services for bankruptcy cases.',
    icon: '/placeholder-service4.png',
    link: '/services/bankruptcy'
  }
])

// Define testimonials with placeholder avatars
const testimonials = ref([
  {
    id: 1,
    name: 'Client One',
    quote: 'Outstanding service and professional advice!',
    avatar: '/placeholder-client1.png'
  },
  {
    id: 2,
    name: 'Client Two',
    quote: 'A reliable partner for all our legal needs.',
    avatar: '/placeholder-client2.png'
  },
  {
    id: 3,
    name: 'Client Three',
    quote: 'Highly recommended for their expertise and care.',
    avatar: '/placeholder-client3.png'
  }
])

// Define blog posts with placeholder images
const blogPosts = ref([
  {
    id: 1,
    title: 'Legal Trends in 2025',
    excerpt: 'Stay updated on the latest legal trends...',
    image: '/placeholder-blog1.png'
  },
  {
    id: 2,
    title: 'Understanding Estate Planning',
    excerpt: 'Learn the essentials of estate planning...',
    image: '/placeholder-blog2.png'
  },
  {
    id: 3,
    title: 'Small Business Legal Tips',
    excerpt: 'Key legal tips for small businesses...',
    image: '/placeholder-blog3.png'
  }
])
</script>

<style scoped>
/* Example basic styling; customize further via Nuxt UI theming */
header {
  background: #ffffff;
}

.hero {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  z-index: 1;
}

footer a {
  color: inherit;
  text-decoration: none;
}
</style>