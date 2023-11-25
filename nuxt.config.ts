// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@pinia/nuxt'
  ],
  pages: true
})