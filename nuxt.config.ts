import axios from 'axios'

const getPostRoutes = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_URL}/api/posts?fields[0]=slug`
  )

  return response?.data?.data.map(post => `/blog/${post.attributes.slug}`)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/ohlaw_icon.svg'
        }
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "Q4l9tT_meQV5Wpva7hnU27YZyc6Eja7hVsf8NqHdhKU"
        }
      ],
      /*
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
<!-- Start Lawmatics Pixel Snippet -->
  !function(e,t,n,a,i,s,c,o,l){e[i]||(c=e[i]=function(){c.process?c.process.apply(c,arguments):c.queue.push(arguments)},c.queue=[],c.t=1*new Date,o=t.createElement(n),o.async=1,o.src=a+'?t='+Math.ceil(new Date/s)*s,l=t.getElementsByTagName(n)[0],l.parentNode.insertBefore(o,l))}(window,document,'script','https://navi.lawmatics.com/navi.min.js','lm_navi',864e5),lm_navi('init','517b5861-878f-43ba-9fff-760855f7ceea'),lm_navi('event','pageload');
<!-- End Lawmatics Pixel Snippet -->
          `
        }
      ]
      */
    }
  },
  apollo: {
    clients: {
      default: {
        authType: 'none',
        httpEndpoint: 'https://strapi.ohlawcolorado.com/graphql'
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
    '@/assets/fonts/fonts.css',
    '@/assets/fonts/google-fonts.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@formkit/themes/genesis',
    '@formkit/addons/css/floatingLabels'
  ],
  devServer: {
    port: 3030
  },
  devtools: { enabled: true },
  formkit: {
    autoImport: true
  },
  gtag: {
    id: 'G-24N250X41Q'
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getPostRoutes()
      console.debug('slugs: ', slugs)
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs)
    }
  },
  image: {
    cloudflare: {
      baseURL: 'https://ohlawcolorado.com'
    },
    strapi: {
      baseURL: `${process.env.STRAPI_URL}/uploads`
    }
  },
  lodash: {
    prefix: '',
    upperAfterPrefix: false
  },
  meilisearch: {
    hostUrl: 'localhost:7700'
  },
  modules: [
    'nuxt-icon',
    'nuxt-gtag',
    'nuxt-lodash',
    'nuxt-meilisearch',
    'nuxt-vuefire',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/strapi'
  ],
  nitro: {
    prerender: {
      crawlLinks: false,
      ignore: [
        '/blog/tags/**',
        '/blog/categories/**',
        /^\/blog$/
      ]
    }
  },
  pages: true,
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL
    }
  },
  ssr: true,
  vite: {
    build: {
      assetsDir: '_nuxt/assets'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/site.scss";'
        }
      }
    }
  },
  vuefire: {
    config: {
      apiKey: process.env.VITE_FIREBASE_KEY,
      appId: process.env.VITE_FIREBASE_APP_ID,
      projectId: process.env.VITE_FIREBASE_PROJECT,
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER,
      storageBucket: process.env.VITE_FIREBASE_BUCKET
    },
    // emulators: process.env.NODE_ENV !== 'production'
  }
})