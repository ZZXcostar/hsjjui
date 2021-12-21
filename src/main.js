import Vue from 'vue'
import App from './App.vue'
import NkbUI from '../packages'
Vue.use(NkbUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
