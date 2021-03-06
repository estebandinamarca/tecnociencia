const pkg = require('./package')

module.exports = {
  mode: 'universal',
  generate: {
    minify: {
      removeOptionalTags: false,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    },
    fallback: true
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
        href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
      },
      {
        rel: 'stylesheet',
        //href: '/photoswipe/photoswipe.css'
        href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.css'
      },
      {
        rel: 'stylesheet',
        //href: '/photoswipe/photoswipe.css'
        href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/default-skin/default-skin.min.css'
      }
    ],
    script: [
      { src: '/photoswipe/photoswipe.min.js' },
      { src: '/photoswipe/photoswipe-ui-default.min.js' }
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
  ** Loading indicator SPA (nuxt generate)
  */
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss' // use our build, as entered via app.scss
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/filters.js',
    { src: '@/plugins/vue-carousel.js', ssr: false }
    //'@/plugins/main.js',
  ],

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
    //baseURL: 'https://itunes.apple.com/',
    //baseURL: (process.env.NODE_ENV === 'production' ? 'https://nostalgic-kalam-072e62.netlify.com' : 'http://localhost:3000'),
    //proxyHeaders: false,
    //credentials: false
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    contentful: {
      apiUrl: 'https://cdn.contentful.com/spaces/',
      apiUrlPreview: 'https://preview.contentful.com/spaces/',
      accessToken: '965bcecaa8a53e1ff31fde30437b9cfb2bf4a48657ec12bfbe5e4d570e524b21',
      apiId: 't72z2lh7n4xf'
    }
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
