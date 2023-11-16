// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'bootstrap/scss/bootstrap.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/scss/site.scss'
  ],
  devtools: { enabled: true },
  formkit: { autoImport: true },
  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt'
  ],
  pages: true
})
