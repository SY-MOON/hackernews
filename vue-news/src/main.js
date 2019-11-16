import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //router = router
}).$mount('#app')

//기본적으로 앱의 플러그인과 라이브러리 구조를 파악할 수있는 청사진