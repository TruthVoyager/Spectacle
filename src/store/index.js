import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ui: 1,
};
const mutations = {
  changeState(state, newState){
    state.ui = newState;
  }
};
const actions = {
  setState({commit}, newState) {
    commit('changeState', newState);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
