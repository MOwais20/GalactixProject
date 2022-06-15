import colors from 'vuetify/es5/util/colors'

const BASE_API_URL = process.env.BROWSER_BASE_URL

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  head: {
    titleTemplate: '%s',
    title: 'Gooex',
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
    '@/assets/style.scss',
    '@/assets/css/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/VueCryptoIcons.js',
    '~plugins/ApexChart.js',
    '~plugins/services.js',
    '~plugins/axios.js',
    '~plugins/vue-toast.js',
    '~plugins/vuelidate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
      regular: [
        'faMoon'
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'vue-currency-filter/nuxt'
  ],

  currencyFilter: [
    { // default name 'currency' filter
      symbol: '$',
      thousandsSeparator: ',',
      fractionCount: 2,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: '',
    },
  ],

  toast: {
    position: 'top-right',
    duration: 3000,
    fitToScreen: true,
    singleton: true,
    keepOnHover: true,
    className: 'defaultFont font-weight-bold',
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_API_URL || 'https://core.nikex.io',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: BASE_API_URL
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  googleFonts: {
    download: true,
    base64: false,
    preload: true,
    fontsPath: '~assets/fonts',
    display: 'swap',
    families: {
      'IBM+Plex+Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700],
        ital: [100]
      },
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FFC407',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#FF315A',
          success: '#00D673',
        },
        dark: {
          primary: '#FFC407',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#FF315A',
          success: '#00D673',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
