import CountTo  from 'vue3-count-to';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vue3-count-to", CountTo);
});