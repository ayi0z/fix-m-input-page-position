import Vue from 'vue'
import App from './App.vue'
import fixinputbug from '@/index'

Vue.use(fixinputbug)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


