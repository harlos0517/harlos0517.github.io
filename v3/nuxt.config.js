export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Harlos Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Harlos Music' },
      { hid: 'og-desc', property: 'og:description', content: 'Pop Pianist, Percussionist, Arranger, Composer, Web Developer' },
      { hid: 'og-image', property: 'og:image', content: '/og.png' },
      { hid: 'og-url', property: 'og:url', content: 'https://harlos.me' },
      { hid: 'description', name: 'description', content: 'Pop Pianist, Percussionist, Arranger, Composer, Web Developer' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/index.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: { sourceMap: false },
    },
  },

  generate: {
    dir: '../docs',
  },

  i18n: {
    langDir: 'locales',
    lazy: false,
    locales: [
      { code: 'en', file: 'en.ts', iso: 'en-US', name: 'English' },
      { code: 'zh', file: 'zh.ts', iso: 'zh-TW', name: '繁體中文' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en-US',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
}
