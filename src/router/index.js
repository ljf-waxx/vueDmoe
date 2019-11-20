import Vue from "vue";
import VueRouter from "vue-router";
import swiper from "../views/swiper.vue";
import gg from "../views/gg.vue";
import home from "../views/Home.vue";
import my from "../views/my.vue";
import brand from "../views/brand.vue";
import select from "../views/select.vue";
import shopping from "../views/shopping-bar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "swiper",
    component: swiper
  },
  {
    path: "/gg",
    name: "广告",
    component: gg
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/select",
    name: "select",
    component: select
  },
  {
    path: "/shopping",
    name: "shopping",
    component: shopping
  },
  {
    path: "/brand",
    name: "brand",
    component: brand
  },
  {
    path: "/my",
    name: "brand",
    component: my
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
