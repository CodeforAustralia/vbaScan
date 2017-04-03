import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  records: [],
  museumSpecies: [],
  ALASpecies: [],
  speciesData: {},
  selectedSpecie: null,
  token: null,
  position: null,
  listView: true,
  filter: 'species',
  progress: false,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
