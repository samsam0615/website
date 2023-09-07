// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: 'pages',
  },
  build: {
    // You can extend webpack config here
    transpile: ['vue-pdf', 'Youtube', 'vue3-count-to'],
  },
  modules: [
    '@nuxt/image',
    'nuxt-simple-sitemap',
  ],
  site: {
    url: 'https://eduairhk.com',
  },
})
