import path from 'node:path'

export default defineNuxtConfig({
  alias: {
    '@@': path.resolve(__dirname, './disable'),
    '@auth': path.resolve(__dirname, './layers/auth'),
    '@base': path.resolve(__dirname, './layers/base'),
    '~~': path.resolve(__dirname, './disable'),
  },
  app: {
    head: {
      title: 'Nuxt Project Template',
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '', hid: 'description' },
      ],
    },
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  imports: {
    scan: false,
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
    prerender: {
      failOnError: false,
    },
  },
})
