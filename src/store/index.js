import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);


export default new Vuex.Store({
  // In state we are keeping our data we are sharing with our components
  state,

  // Getters are like computed properties. Simple function to get a state
  getters,

  // Simple function to mutate a state
  mutations,

  // Action are like methods in vue componenet. They should not mutate the state
  // Very good spot to fetch a data. Action call usually should resolve into data
  actions,
  modules: {}
});