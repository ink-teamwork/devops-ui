import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-awesome/icons'
import App from './App.vue'
import router from './router'
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueRouter);
Vue.use(ElementUI);
// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
