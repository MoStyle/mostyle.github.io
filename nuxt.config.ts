export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: ['@/assets/biblio.css'],
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  app: {
    baseURL: '/',
    head: {
      script: [
        {
          src: "https://player.vimeo.com/api/player.js",
        },
      ],
    },
  }
})
