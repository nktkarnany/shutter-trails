// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image'],

  spaLoadingTemplate: false,

  ssr: false,

  css: ['~/assets/scss/main.scss'],

  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: 'Shutter Trails',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
});
