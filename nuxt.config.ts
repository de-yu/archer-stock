import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    'uikit/dist/css/uikit.min.css'
  ],
  head: {
    script: ['uikit/dist/js/uikit.min.js']
  },
})
