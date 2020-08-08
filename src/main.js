import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import ApiSearch from "./components/ApiSearch";
import App from "./App";
import "./assets/styles/index.css";
Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "api-search",
      component: ApiSearch,
    },
  ],
});
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
