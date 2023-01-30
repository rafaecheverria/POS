export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'posventas',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no', name:'viewport' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:"76x76", href: '/assets/img/apple-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/light-bootstrap-dashboard.css?v=2.0.1' },
      { rel: 'stylesheet', href: '/assets/css/demo.css' },
    ],

    script: [
      { src: '/assets/js/core/jquery.3.2.1.min.js'},
      { src: '/assets/js/core/popper.min.js'},
      { src: '/assets/js/core/bootstrap.min.js'},
      { src: '/assets/js/plugins/bootstrap-switch.js'},
      { src: '/assets/js/plugins/chartist.min.js'},
      { src: '/assets/js/plugins/bootstrap-notify.js'},
      { src: '/assets/js/plugins/jquery-jvectormap.js'},
      { src: '/assets/js/plugins/moment.min.js'},
      { src: '/assets/js/plugins/bootstrap-datetimepicker.js'},
      { src: '/assets/js/plugins/sweetalert2.min.js'},
      { src: '/assets/js/plugins/bootstrap-tagsinput.js'},
      { src: '/assets/js/plugins/nouislider.js'},
      { src: '/assets/js/plugins/bootstrap-selectpicker.js'},
      //{ src: '/assets/js/plugins/jquery.validate.min.js.js'},
      { src: '/assets/js/plugins/jquery.bootstrap-wizard.js'},
      { src: '/assets/js/plugins/bootstrap-table.js'},
      { src: '/assets/js/plugins/jquery.dataTables.min.js'},
      { src: '/assets/js/plugins/fullcalendar.min.js'},
      { src: '/assets/js/light-bootstrap-dashboard.js?v=2.0.1'},
      { src: '/assets/js/demo.js'},
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
