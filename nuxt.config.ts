// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "Q4l9tT_meQV5Wpva7hnU27YZyc6Eja7hVsf8NqHdhKU"
        }
      ]
    }
  },
  apollo: {
    clients: {
      default: {
        authType: 'none',
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },
  build: {
    transpile: [
      '@formkit/icons',
      '@formkit/addons',
      '@formkit/nuxt',
      '@formkit/pro',
      '@formkit/themes',
      '@formkit/vue',
      '@fortawesome/fontawesome-free',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome',
      'vue-toastification'
    ]
  },
  css: [
    // 'bootstrap/scss/bootstrap.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@formkit/themes/genesis',
    '~/assets/scss/site.scss'
  ],
  devtools: { enabled: true },
  formkit: {
    autoImport: true
  },
  env: {
    strapiBaseUri: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
  },
  gtag: {
    id: 'G-24N250X41Q'
  },
  modules: [
    'nuxt-icon',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/strapi'
  ],
  pages: true,
  ssr: false
})