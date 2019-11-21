import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mail from './components/Mail.vue'
import Home from './components/Home.vue'
import Child from './components/List.vue'
//import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';


Vue.use(VueRouter)
//Vue.use(Vuetify)


//const Mail = { template: '<div>mail</div>' }

const routes = [
  {path: '/', component: Home},
  {path: '/mail', component: Mail},
  {path: '/list', component: Child}
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
