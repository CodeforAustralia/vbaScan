import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  records: [],
  token: null,
  position: null,
  listView: true,
  filter: 'records',
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
