// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // runtimeConfig: {
  //   resendKey: process.env.RESEND_API_KEY,
  // },

  modules: ['@nuxtjs/device', '@nuxtjs/color-mode', '@vueuse/motion/nuxt', '@nuxt/icon'],
  compatibilityDate: '2024-11-16',
})