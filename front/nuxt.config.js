export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL:  "path/to/api_base/", // apiのベースURLを追加 
  },
  auth: {
    redirect: {
        login: '/login', 
        logout: '/login', 
        callback: false,
        home: '/home'
    },
    strategies: {
        User: {
            provider: 'laravel/jwt',
            url: '/Users',
            token: {
                property: 'access_token',
                maxAge: 60 * 60,
            },
            refreshToken: {
                property: 'access_token',
                maxAge: 20160 * 60,
            },
            endpoints: {
                login: { url: '/login', method: 'post', propertyName: 'access_token' },
                logout: { url: '/logout', method: 'post' },
                refresh: { url: '/refresh', method: 'post' , propertyName: 'access_token'}, 
                user: { url: '/me', method: 'get', propertyName: false},
            }
        }
    },
  },
}
