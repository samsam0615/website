
// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from './i18n.js'

export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: 'pages',
  },
  build: {
    // You can extend webpack config here
    transpile: ['vue-pdf', 'Youtube', 'vue3-count-to', '@googlemaps/js-api-loader'],
  },
  modules: [
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-jsonld',
    ['@nuxtjs/i18n', i18n],
  ],
  site: {
    url: 'https://eduairhk.com',
  },
  i18n: {
    vueI18n: './i18n.js' // custom path example
  }
})
