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
    viewTransition: true,
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    defaultLocale: 'nl',
    langDir: 'locales',
    locales: [
      { iso: 'en-US', code: 'en', file: 'en.json' },
      { iso: 'nl-BE', code: 'nl', file: 'nl.json' },
      { iso: 'fr-FR', code: 'fr', file: 'fr.json' },
    ],
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
  },
  imports: {
    dirs: [],
    global: false,
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-time',
  ],
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
  runtimeConfig: {
    public: {
      apiClientId: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_ID environment variable
      apiBaseUrl: '', // can be overridden by NUXT_PUBLIC_API_URL environment variable
      apiClientSecret: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_SECRET environment variable
      apiEndpoint: '', // can be overridden by NUXT_PUBLIC_API_ENDPOINT environment variable
    },
  },
})
