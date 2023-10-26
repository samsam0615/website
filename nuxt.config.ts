// https://nuxt.com/docs/api/configuration/nuxt-config
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
  ],
  site: {
    url: 'https://eduairhk.com',
  },
})
