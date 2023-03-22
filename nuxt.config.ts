// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      // link: [
      //   { rel: 'stylesheet', href: '' }
      // ],
      script: [
        // Insert your Google Tag Manager Script here
        { src: 'https://js.stripe.com/v3/', async: true, type: 'text/partytown' },
        { src: 'https://connect.facebook.net/en_US/sdk.js', async: true, type: 'text/partytown' }
      ]
    }
  },
  css: ['/assets/main.css'],
  typescript: {
    shim: false,
    tsConfig: {
      exclude: ['node_modules', 'dist'],
      compilerOptions: {
        strict: true,
      },
    },
  },
  nitro: {
    preset: 'render-com',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/partytown',
    'nuxt-icon',
    '@nuxt/devtools',
    // https://icones.js.org/
    '@nuxtjs/color-mode',
    '@nuxt/image-edge'
  ],
  partytown: {
    // For google analytics
    forward: ['dataLayer.push'],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api'
    }
  },
  build: {
    transpile: ['']
  },
  ssr: true,
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
