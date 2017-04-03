/* eslint-disable import/prefer-default-export */
import Vue from 'vue';

function getValue(value) {
  return value || null;
}

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

export const ADD_ALA_SPECIES = (state, specie) => {
  state.ALASpecies.push(specie);
};

export const ADD_SPECIE_DATA = (state, { taxonId, data }) => {
  const isMuseumData = Object.prototype.hasOwnProperty.call(data, 'taxonomy');
  if (isMuseumData) {
    // reduce the data object to a subset
    const subset = [
      'hazards',
      'animalType',
      'animalSubType',
      'colours',
      'maximumSize',
      'habitats',
      'media',
      'diet',
      'dietCategories',
      'habitat',
      'distribution',
      'biology',
      'generalDescription',
      'briefId',
      'licence',
      'endemicity',
      'commercial',
      'conservationStatuses',
      'authors',
      'taxonomy',
      'whenActive',
      'whereToLook',
    ].reduce((acc, prop) => {
      // acc[prop] = data[prop];
      return Object.assign({}, acc, { [prop]: data[prop] });
    }, {});
    return Vue.set(state.speciesData, taxonId, subset);
  }

  const specieTemplate = {
    media: [{
      large: {
        uri: data.largeImageUrl ? data.largeImageUrl.replace(/http:\/\//, 'https://') : null,
      },
      medium: {
        uri: data.imageUrl ? data.imageUrl.replace(/http:\/\//, 'https://') : null,
      },
      thumbnail: {
        uri: data.thumbnailUrl ? data.thumbnailUrl.replace(/http:\/\//, 'https://') : null,
      },
    }],
    taxonomy: {
      family: getValue(data.family),
      kingdom: getValue(data.kingdom),
      commonName: getValue(data.commonName),
      // class: getValue(data.class),
      // genus: getValue(data.genus),
      // order: getValue(data.order),
      // phylum: getValue(data.order),
      // subclass: getValue(data.subclass),
      taxonName: getValue(data.name),
    },
  };
  // console.log(specieTemplate);
  return Vue.set(state.speciesData, taxonId, specieTemplate);
};

export const UPDATE_SPECIE_DETAIL = (state, specie) => {
  Vue.set(state, 'selectedSpecie', specie);
};
