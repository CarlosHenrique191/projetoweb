import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import api from './api.js'
import vueCookies from "vue-cookies";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vueCookies);

Vue.config.productionTip = false

Vue.prototype.$http = api;


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
