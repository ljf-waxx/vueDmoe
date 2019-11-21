import Vue from "vue";
import VueRouter from "vue-router";
import swiper from "../views/swiper.vue";
import gg from "../views/gg.vue";
import home from "../views/Home.vue";
import my from "../views/my.vue";
import brand from "../views/brand.vue";
import select from "../views/select.vue";
import shopping from "../views/shopping-bar.vue";
import byuing from "../views/buying.vue";
import login from "../views/login.vue"
import search from "../views/search.vue"


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
    component: home,
    children:[
      {path:"/home/buying",name:"买买买",component:byuing}
    ]
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
  },{
    path:"/buying",
    // name:"买!",
    component:byuing
  },
  {
    path:"/login",
    name:"注册",
    component:login
  },
  {
    path:'/search',
    name:"搜索",
    component:search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
