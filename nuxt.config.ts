// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image'],

  spaLoadingTemplate: false,

  ssr: false,

  css: ['~/assets/scss/index.scss'],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/difdrnkxr/image/upload/shutter-trails'
    }
  },

  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: 'Shutter Trails',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
});
