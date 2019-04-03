import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import App from './App.vue'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import store from './store'

Vue.use(VueRouter);
Vue.use(ElementUI);
// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon);

Vue.config.productionTip = false;
const  auth = {};

sessionStorage.setItem("auth", JSON.stringify(auth));
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
