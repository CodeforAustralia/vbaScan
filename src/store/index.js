import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  records: [],
  speciesData: {},
  selectedSpecie: null,
  token: null,
  position: {
    acc: false,
    lat: false,
    long: false,
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
