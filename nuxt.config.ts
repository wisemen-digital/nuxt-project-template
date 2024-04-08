import { customRoutePaths } from './customRoutePaths'

export default defineNuxtConfig({
  devtools: { enabled: true },
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
    '/nl': { prerender: true },
    '/fr': { prerender: true },
    '/en': { prerender: true },
  },
  imports: {
    dirs: [
      'composables/**',
      'models/**',
      'stores/**',
      'utils/**',
    ],
  },
  app: {
    head: {
      title: 'Nuxt Project Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
      ],
    },
  },
  css: [
    '~/assets/styles/main.scss',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'nl',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'nl', iso: 'nl-BE', file: 'nl.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
    ],
    customRoutes: 'config',
    pages: customRoutePaths,
    vueI18n: './i18n.config.ts',
    compilation: {
      strictMessage: false,
    },
  },
  build: {
    transpile: [
      'gsap',
    ],
  },
  runtimeConfig: {
    public: {
      BASE_URL: '',
    },
  },
})
