export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Police System',
    title: 'Frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  // Global js:
  js: ['@/assets/js/bootstrap.bundle.min.js','@/assets/js/bootstrap.min.js'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/Vuelidate',
    '~/plugins/commonUtil'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module', // disabled eslint (intentional)
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-i18n',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    'nuxt-moment',
    'nuxt-socket-io',
  ],

  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://localhost:4000'
    }]
  },



  // i18
  i18n: {
    seo: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json')
      },
      dateTimeFormats: {
        en: {
          long: { year: 'numeric', month: 'long', day: 'numeric' }
        }
      }
    },
    detectBrowserLanguage: false
  },


    // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BASE_URL
  },

  toast: {
    position: 'top-right',
    options: {
      duration: 2000
    },

    register: [
      // Register custom toasts
      // {
      //   name: 'post_success',
      //   message: 'Saved Successfully',
      //   options: {
      //     type: 'success',
      //     duration: 1000,
      //     theme: 'toasted-primary',
      //     keepOnHover: true,
      //     fullWidth: false
      //   }
      // }
    ]
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    rotateToken: process.env.ROTATE_TOKEN || false
  },
  router: {
    middleware: 'base'
  },
  loading: true

  // loading: '~/components/loading.vue'
}
