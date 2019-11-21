import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mail from './components/Mail.vue'
import Home from './components/Home.vue'
import Child from './components/List.vue'
import Test from './components/Test.vue'
//import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
import axios from 'axios'


Vue.use(VueRouter)
//Vue.use(Vuetify)
Vue.use(axios)


//const Mail = { template: '<div>mail</div>' }

const routes = [
  {path: '/', component: Home},
  {path: '/mail', component: Mail},
  {path: '/list', component: Child},
  {path: '/test', component:Test}
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
