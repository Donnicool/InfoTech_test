import Vue from "vue";
import Vuex from "vuex";

import TodoStore from "@/store/TodoStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    TodoStore,
  },
});
