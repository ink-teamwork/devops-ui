import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const  auth = {};
sessionStorage.setItem("auth", JSON.stringify(auth));
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
