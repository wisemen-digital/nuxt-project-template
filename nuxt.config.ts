export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
        { content: '', hid: 'description', name: 'description' },
      ],
      title: 'Nuxt Project Template',
    },
  },

  build: {
    transpile: [
      'gsap',
    ],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/modules',
      pathPrefix: false,
    },
  ], css: [
    '~/assets/styles/main.scss',
  ],

  devtools: { enabled: true },
  experimental: {
    typedPages: true,
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US' },
      { code: 'nl', file: 'nl.json', iso: 'nl-BE' },
      { code: 'fr', file: 'fr.json', iso: 'fr-FR' },
    ],
    strategy: 'prefix_and_default',
    vueI18n: './i18n.config.ts',
  },
  imports: {
    dirs: [
      'composables/**',
      'models/**',
      'stores/**',
      'utils/**',
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
    prerender: {
      failOnError: false,
    },
  },
  routeRules: {
    '/': { prerender: false, redirect: '/nl' },
    '/en': { prerender: true },
    '/fr': { prerender: true },
    '/nl': { prerender: true },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: '', // can be overridden by NUXT_PUBLIC_API_URL environment variable
      apiClientId: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_ID environment variable
      apiClientSecret: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_SECRET environment variable
      apiEndpoint: '', // can be overridden by NUXT_PUBLIC_API_ENDPOINT environment variable
    },
  },
})
