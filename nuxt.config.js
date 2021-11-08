export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  head: {
    title: 'Poem',
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
    'element-ui/lib/theme-chalk/index.css',
    '@/global/icon.css',
    '@/global/bootstrap.min.css',
    '@/global/app.min.css',
    '@/global/globalstyles.css'
  
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-ripple.js',
    "@/plugins/axios",
    "@/plugins/vue-validate"
  ],

  toast: {
    timeout: 3000,
    closeOnClick: false
},


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/fontawesome"
  ],
  axios: {
    // baseURL: "http://e842a3dd150b.ngrok.io/api/",
    baseURL: "https://poem-backend-app.herokuapp.com/api/"
    // baseURL: "http://ass.tujjor.org/api/",
    // baseURL: 'http://media.huquqiyportal.uz/api',
    // baseURL: "http://localhost:3301/api"
},


  fontawesome: {
    component: "fa",
    icons: {
        solid: true,
        brands: true
    }
},


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
    "@nuxtjs/auth-next",
  ],
  router: {
    middleware: ["auth",]
},
auth: {
    redirect: {
        login: "/auth/login",
        logout: "/auth/login",
        callback: "/auth/login",
        home: "/poem"
    },
    strategies: {
        local: {
            token: {
                property: "token"
            },
            user: {
                property: "data",
               
            },
            endpoints: {
                login: { url: "/login", method: "post" },
                user: { url: "/get/user/me", method: "get" }
            }
        }
    }
},




  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
