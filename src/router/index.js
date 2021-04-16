import Vue from 'vue'
import Router from 'vue-router'

import * as routeTypes from './route-types'

import Landing from '@/components/views/landing.vue'
import Test from '@/components/views/test.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      ...routeTypes.LANDING,
      components: {
        default: Landing
      }
    },
    {
      ...routeTypes.TEST,
      components: {
        default: Test
      }
    }
  ]
})

export default router
