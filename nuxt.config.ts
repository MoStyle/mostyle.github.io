export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: ['@/assets/biblio.css'],
  app: {
    head: {
      script: [
        {
          src: "https://player.vimeo.com/api/player.js",
        },
      ],
    },
  }
})
