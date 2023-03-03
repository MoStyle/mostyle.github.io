export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: ['@/assets/biblio.css'],
  app: {
     baseURL: '/mostyle/',
    head: {
      script: [
        {
          src: "https://player.vimeo.com/api/player.js",
        },
      ],
    },
  }
})
