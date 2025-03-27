import axios from 'axios'
import { seoConfig } from './seo.config'

const getPostRoutes = async () => {
  if (!process.env.STRAPI_URL) {
    console.warn('STRAPI_URL not set, skipping post routes generation');
    return [];
  }

  try {
    const pageSize = 25
    const initialResponse = await axios.get(
      `${process.env.STRAPI_URL}/api/posts?fields[0]=slug&pagination[pageSize]=${pageSize}`,
      {
        headers: {
          'Strapi-Response-Format': 'v4'
        }
      }
    )
    const { pagination } = initialResponse.data.meta;
    const { pageCount, total } = pagination;
    
    
    // Create an array of all page numbers we need to fetch
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1)
      .filter(page => page > 1); // Filter out page 1 which we already have

    // Define a function to fetch a specific page
    const fetchPage = async (page) => {
      const response = await axios.get(
        `${process.env.STRAPI_URL}/api/posts?fields[0]=slug&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        {
          headers: {
            'Strapi-Response-Format': 'v4'
          }
        }
      )
      return response.data.data;
    }

    // Initial posts from first page
    let allPosts = [...initialResponse.data.data]

    // Fetch additional pages if needed
    if (pageNumbers.length > 0) {
      const additionalPosts = await Promise.all(pageNumbers.map(fetchPage));
      allPosts = allPosts.concat(additionalPosts.flat());
    }

    console.info('Strapi pre-render post list: ', allPosts)
    
    return allPosts.map(post => 
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
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/fonts/fonts.css',
    '@/assets/fonts/google-fonts.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@formkit/themes/genesis',
    '@formkit/addons/css/floatingLabels',
    '~/assets/css/site.scss'
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
      console.info('slugs: ', slugs)
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

  modules: ['nuxt-icon', 'nuxt-gtag', // 'nuxt-vuefire',
  'nuxt-lodash', '@vueuse/nuxt', '@formkit/nuxt', '@pinia/nuxt', '@nuxtjs/apollo', // '@nuxtjs/strapi'
  '@nuxt/content', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  nitro: {
    prerender: {
      crawlLinks: false,
      ignore: [
        '/blog/tags/**',
        '/blog/categories/**',
        /^\/blog$/
      ],
      routes: ['/']
    },
    preset: 'cloudflare-pages'
  },

  pages: true,

  robots: {
    disallow: [
      '/contact',
      '/glossary',
      '/services',
      '/blog/categories',
      '/blog/tags',
      '/landings/booking',
      '/services/bankruptcy/about-ch7',
      '/services/estate-planning/GunTrusts'
    ],
    allow: [
      '/services/bankruptcy',
      '/services/estate-planning',
      '/services/nonprofits',
      '/services/small-business'
    ]
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

  vite: {
    build: {
      assetsDir: '_nuxt/assets'
    },
    css: {
      preprocessorOptions: {
        quietDeps: true
      }
    },
    optimizeDeps: { include: ['bootstrap', 'vue', 'vuefire'] }
  },

  sitemap: {
    sources: [
      'https://strapi.ohlawcolorado.com/api/sitemap/index.xml'
    ]
  },
  /*
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
  */

  compatibilityDate: '2024-09-25'
})