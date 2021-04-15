import Vue from 'vue'
import Router from 'vue-router'

import * as routeTypes from './route-types'

// Base views + components
import Landing from '@/components/views/landing.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      ...routeTypes.LANDING,
      components: {
        default: Landing
      }
    }
  ]
})

export default router
