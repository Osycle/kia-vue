

const pkg = require('./package')

module.exports = {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    script: [
      // {src: "@/static/metrix.js"}
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon/favicon.ico' }
    ]
  },

  loading: { color: '#05141F' },
  css: [
    '@/static/fonts/Kia/stylesheet.css',
    '@/static/scss/plugins.scss',
    '@/static/scss/main.scss'
  ],

  plugins: [
    '@plugins/vue-input-facade.js',
  ],

  modules: [
    // Накст
    '@nuxtjs/axios',
    '@nuxt/http',
    
    // Метрики
    'nuxt-facebook-pixel-module',

    ['@nuxtjs/google-analytics', { ua: 'UA-126548408-24' }],
    '@nuxtjs/gtm',
    ['@nuxtjs/yandex-metrika',
      {
        id: '80120311',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer",
        // useCDN:false,
      }
    ],

  ],
  facebook: {
    track: 'PageView',
    pixelId: '357795334408363',
    autoPageView: true,
    disabled: false
  },
  gtm: {
    id: 'GTM-K5HVG7K'
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },
  axios: {
    //baseURL: 'https://lada.uz/temp-api/',
    baseURL: 'https://lays.uz/tempphp/',
    //baseURL: 'https://html.lifestyle.uz/kia-api/',
    //baseURL: 'http://kia-api-php/',
    withCredentials: true,
    headers: {
      //Accept: 'application/x-www-form-urlencoded',
      //'Content-Type': 'application/x-www-form-urlencoded'
    }
  },

  build: {
    extend(config, ctx) {
      
    }
  }
}

Array.prototype.check = function(param){
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if(element === param){
      break;
      return true;
    }
  }
}