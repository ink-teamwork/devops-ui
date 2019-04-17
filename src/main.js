import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
import EUI from './components/EUI'

Vue.use(EUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const  auth = {};
sessionStorage.setItem("auth", JSON.stringify(auth));
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
