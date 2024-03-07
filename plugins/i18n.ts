import { createI18n } from 'vue-i18n'
import zh from '../locales/zh/main.js'
import en from '../locales/en/main.js'
import cn from '../locales/cn/main.js'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh',
    messages: {
        'zh': zh,
        'en': en,
        'cn': cn
    }
  })

  nuxtApp.vueApp.use(i18n)
})