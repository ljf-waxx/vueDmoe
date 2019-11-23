import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "swiper";
import "swiper/dist/css/swiper.css";

import Cube from 'cube-ui'

Vue.use(Cube)

import "animate.css";
import "./assets/font/iconfont.css";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import axios from "axios";
axios.defaults.baseURL = "http://192.168.54.65:3000";
Vue.prototype.$axios = axios;

import vueJsonp from "vue-jsonp";
Vue.use(vueJsonp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
