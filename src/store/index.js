import Vue from "vue";
import Vuex from "vuex";
import bannerLiner from "./home/bannerLiner";
import selectBox from "./home/selectBox";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    bannerLiner,
    selectBox
  },
  children: {}
});
