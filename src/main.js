
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import GlobalComponents from "@/components/global/global.js";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

GlobalComponents.forEach( (component) => {
  Vue.component(component.name, component);
});
// Vue.use(GlobalComponents)
Vue.config.productionTip = false;

import "./assets/scss/bootstrap-overrides.scss";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/scss/all.scss";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
