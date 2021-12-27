import Vue from 'vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import route from './router'
import store from './store'
import Api from './api'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Api)
Vue.config.productionTip = false;

const { routes, AfterEach, BeforeEach } = route
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to: any, from: any, next: any) => {
  BeforeEach(to, from, next)
})
router.afterEach(() => {
  AfterEach()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
