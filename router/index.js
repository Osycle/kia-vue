import VueRouter from 'vue-router'

import login from '../pages/login'
import models from '../pages/models'


export default new VueRouter({
  routes: [
    {
      path: '/',
      component: {index},
    },
    {
      path: 'models',
      component: {models},
    },
    {
      path: 'login',
      component: {login},
    }
    
  ]
})