import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  records: [],
  species: [],
  speciesData: {},
  selectedSpecie: undefined,
  token: undefined,
  position: {
    acc: undefined,
    lat: undefined,
    long: undefined,
  },
  listView: true,
  filter: 'scientificName',
  progress: false,
  searchRadius: 250,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
