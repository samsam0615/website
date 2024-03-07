
// https://nuxt.com/docs/api/configuration/nuxt-config
/* import i18n from './i18n.js' */

export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: 'pages',
  },
  build: {
    // You can extend webpack config here
    transpile: ['vue-pdf', 'Youtube', 'vue3-count-to', '@googlemaps/js-api-loader', 'vue-pdf-embed'],
  },
  modules: [
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-jsonld',
  ],
  site: {
    url: 'https://eduairhk.com',
  },
})
