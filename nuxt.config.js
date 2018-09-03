const pkg = require('./package')

module.exports = {
  mode: 'universal',
  generate: {
    minify: {
      removeOptionalTags: false,
      minifyCSS: true,
      minifyJS: true
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        //href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,700'
        href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#81d200',
    height: '5px'
  },
  //loading: false,

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss' // use our build, as entered via app.scss
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    //'bootstrap-vue/nuxt'
    ['bootstrap-vue/nuxt', { css: false }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //baseURL: 'https://itunes.apple.com/'
    //baseURL: (process.env.NODE_ENV === 'production' ? 'https://nostalgic-kalam-072e62.netlify.com' : 'http://localhost:3000')
    //proxyHeaders: false,
    //credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
