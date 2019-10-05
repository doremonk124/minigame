export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://core0817.herokuapp.com/api/login', method: 'post', propertyName: 'data.token' },
          logout: { url: 'https://core0817.herokuapp.com/api/logout', method: 'post' },
          user: { url: 'https://core0817.herokuapp.com/api/me/profile', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      },
      facebook: {
        client_id: '524883191332637',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=name,picture{url},email',
        scope: ['email']
      },
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://localhost:3000'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
