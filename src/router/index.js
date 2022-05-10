import Vue from 'vue'
import Router from 'vue-router'

import product from '../components/products.vue'
import watchUpper from '../components/watchUppercase.vue'

Vue.use(Router)
const routes =[
    {
      path:'/product',
      name:'product',
      component:product
    },
    {
      path:'/watch',
      name:'watchUpper',
      component:watchUpper
    }

]

let router =  new Router({routes})
export default router
