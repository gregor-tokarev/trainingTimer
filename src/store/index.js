import Vue from 'vue'
import Vuex from 'vuex'
import trainings from "@/store/modules/trainings";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins:[createPersistedState()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    trainings
  }
})
