import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

import "../node_modules/materialize-css/dist/css/materialize.css"
import 'materialize-css'

import Home from './Home.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import About from './About.vue'
import Cart from './Cart.vue'
import Admin from './Admin.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/Login", component: Login},
  {path: "/Signup", component: Signup},
  {path: "/About", component: About},
  {path: "/Cart", component: Cart},
  {path: "/Admin", component: Admin},

]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
