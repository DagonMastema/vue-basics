import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mail from './components/Mail.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

//const Mail = { template: '<div>mail</div>' }

const routes = [
  {path: '/mail',component: Mail},
  {path: '/hello',component: HelloWorld},
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
