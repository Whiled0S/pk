
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: { lang: 'ru' },
    title: 'ООО "ПК" – Аутсорсинг бухгалтерии юридических услуг',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Аутсорсинг бухгалтерии юридических услуг' },
      { name: 'yandex-verification', content: 'cac1422c6501b9f9' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'reset-css',
    '~assets/styles/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuemask.client',
    '~plugins/toasted.client',
    '~plugins/promised'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt'
  ],

  sitemap: {
    hostname: 'https://pravo-kons.ru'
  },

  styleResources: {
    scss: [
      '~assets/styles/resources/*.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: process.env.NODE_ENV === 'development',
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ololocalhost.ru'
  },

  proxy: {
    '/api/': 'http://localhost:5000'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
