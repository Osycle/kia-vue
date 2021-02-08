


const pkg = require('./package')

module.exports = {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#bb162b' },
  css: [
    '@/static/fonts/Kia/stylesheet.css',
    '@/static/scss/plugins.scss',
    '@/static/scss/main.scss'
  ],

  plugins: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
  ],
  axios: {
    baseURL: 'https://html.lifestyle.uz/kia-api/',
    //baseURL: 'http://kia-api-php/',
  },

  build: {
    extend(config, ctx) {
      
    }
  }
}