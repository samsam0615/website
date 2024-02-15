import zh from './lang/zh.js'
import en from './lang/en.js'

export default {
    locale: ['zh', 'en'],
    defaultLocale: 'zh',
    messages: {zh, zh},
    vueI18n: {
        fallbackLocale: 'zh',
        messages: {zh, zh},
    }
}