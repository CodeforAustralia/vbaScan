/* eslint-disable import/prefer-default-export */

import Vue from 'vue';

export const SET_TOKEN = (state, token) => {
  Vue.set(state, 'token', token);
};

export const SET_RECORDS = (state, records) => {
  Vue.set(state, 'records', records);
};

export const SET_POSITION = (state, position) => {
  Vue.set(state, 'position', position);
};

export const SWITCH_VIEW = state => Vue.set(state, 'listView', !state.listView);

export const UPDATE_FILTER = (state, filter) => {
  Vue.set(state, 'filter', filter);
};

export const SWITCH_PROGRESS = (state) => {
  Vue.set(state, 'progress', !state.progress);
};

export const ADD_MUSEUM_SPECIES = (state, specie) => {
  state.museumSpecies.push(specie);
};
