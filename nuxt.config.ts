// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: 'desktop'
    }
  },
  security: {
    corsHandler: false,
    headers: false
  },
  nitro: {
    storage: {
      logs: {
        driver: 'vercelKV',
        base: 'incubrain'
      }
    },
    devStorage: {
      logs: {
        driver: 'fs',
        base: './public/logs'
      }
    },
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // link: [
      //   { rel: 'stylesheet', href: '' }
      // ],
      script: [
        // Insert your Google Tag Manager Script here
        // {
        //   src: 'https://js.stripe.com/v3/',
        //   async: true,
        //   type: 'text/partytown'
        // },
        // {
        //   src: 'https://connect.facebook.net/en_US/sdk.js',
        //   async: true,
        //   type: 'text/partytown'
        // }
      ]
    }
  },
  css: ['/assets/css/tailwind.css'],
  imports: {
    dirs: ['stores', 'data', 'utils']
  },
  typescript: {
    shim: false,
    tsConfig: {
      exclude: ['node_modules', 'dist'],
      compilerOptions: {
        strict: true,
        types: ['@sentry/vue']
      },
      module: 'esnext'
    }
  },
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
    // Don't add any /app/** URLs to the sitemap.xml, app renders on client side.
    '/app/**': { index: false, ssr: false, isr: false }
  },
  modules: [
    '@nuxthq/ui',
    '@nuxt/content',
    '@nuxtjs/partytown',
    '@nuxt/devtools',
    '@nuxt/image',
    '@unlighthouse/nuxt',
    'nuxt-security',
    'nuxt-simple-sitemap',
    '@nuxtjs/supabase',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  partytown: {
    // For google analytics
    forward: ['dataLayer.push']
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      LOG_ENV: process.env.LOG_ENV
    },
    // The private keys which are only available within server-side
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY
  },
  build: {
    transpile: ['']
  },
  ssr: true,
  ui: {
    icons: ['mdi', 'heroicons', 'material-symbols']
  },
  content: {
    // Nuxt content options
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-light',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})
