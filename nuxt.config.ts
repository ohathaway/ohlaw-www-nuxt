import axios from 'axios'

const getPostRoutes = async () => {
  if (!process.env.STRAPI_URL) {
    console.warn('STRAPI_URL not set, skipping post routes generation');
    return [];
  }

  try {
    const response = await axios.get(
      `${process.env.STRAPI_URL}/api/posts?fields[0]=slug`,
      {
        headers: {
          'Strapi-Response-Format': 'v4'
        }
      }
    )
    console.info('Strapi pre-render post list: ', response.data)
    
    return response?.data?.data?.map(post => 
      `/blog/${post?.slug ?? post?.attributes?.slug}`
    ).filter(Boolean);
    
  } catch (error) {
    console.error('Error fetching post routes:', error);
    return [];
  }
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
        httpEndpoint: 'https://strapi.ohlawcolorado.com/graphql',
        /*
        httpLinkOptions: {
          headers: {
            'Strapi-Response-Format': 'v4'
          }
        }
        */
      }
    }
  },

  build: {
    transpile: [
      // '@formkit/icons',
      // '@formkit/addons',
      // '@formkit/nuxt',
      // '@formkit/pro',
      // '@formkit/themes',
      // '@formkit/vue',
      // '@fortawesome/fontawesome-free',
      // '@fortawesome/fontawesome-svg-core',
      // '@fortawesome/free-regular-svg-icons',
      // '@fortawesome/free-solid-svg-icons',
      // '@fortawesome/vue-fontawesome',
      // 'vue-toastification'
    ]
  },

  css: [
    // 'bootstrap-icons/font/bootstrap-icons.css',
    // '@/assets/fonts/fonts.css',
    // '@/assets/fonts/google-fonts.css',
    // '@fortawesome/fontawesome-svg-core/styles.css',
    // '@formkit/themes/genesis',
    // '@formkit/addons/css/floatingLabels',
    '~/assets/css/site.scss'
  ],

  devServer: {
    port: 3030
  },

  devtools: { enabled: true },

  extends: ['@nuxt/ui-pro'],

  formkit: {
    autoImport: true
  },

  future: { 
    compatibilityVersion: 4,
    typescriptBundlerResolution: true
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

  modules: [
    'nuxt-gtag',
    'nuxt-lodash',
    'nuxt-vuefire',
    '@formkit/nuxt',
    // '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    // '@nuxt/ui-pro',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // '@nuxtjs/strapi'
  ],

  nitro: {
    prerender: {
      crawlLinks: false,
      ignore: [
        '/blog/tags/**',
        '/blog/categories/**',
        /^\/blog$/
      ]
    },
    // preset: 'cloudflare-pages'
  },

  pages: true,

  routeRules: {
    // Temporary workaroud for prerender regression see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },

  runtimeConfig: {
    cloudflare: {
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
      secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
      bucketName: process.env.CLOUDFLARE_BUCKET_NAME
    },
    public: {
      strapiUrl: process.env.STRAPI_URL
    }
  },

  ssr: true,

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },

  vite: {
    build: {
      assetsDir: '_nuxt/assets'
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    },
    optimizeDeps: { include: ['bootstrap', 'vue', 'vuefire'] }
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
  },

  compatibilityDate: '2024-09-25'
})