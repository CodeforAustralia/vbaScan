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
