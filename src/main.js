import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import VueKinesis from 'vue-kinesis'

Vue.use(VueMeta)
Vue.use(VueKinesis)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
