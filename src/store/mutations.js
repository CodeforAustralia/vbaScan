/* eslint-disable import/prefer-default-export */
import Vue from 'vue';

function getValue(value) {
  return value || null;
}

export const SET_TOKEN = (state, token) => {
  Vue.set(state, 'token', token);
};

export const SET_SPECIES = (state, species) => {
  Vue.set(state, 'species', species);
};

export const SET_RECORDS = (state, records) => {
  Vue.set(state, 'records', records);
};

export const SET_POSITION = (state, position) => {
  Vue.set(state, 'position', position);
};

export const SET_RADIUS = (state, value) => {
  Vue.set(state, 'searchRadius', value);
};

export const CLEAR_RECORDS = (state) => {
  Vue.set(state, 'records', []);
};

export const SWITCH_VIEW = state => Vue.set(state, 'listView', !state.listView);

export const UPDATE_FILTER = (state, filter) => {
  Vue.set(state, 'filter', filter);
};

export const SWITCH_PROGRESS = (state) => {
  Vue.set(state, 'progress', !state.progress);
};

export const HYDRA_SPECIE = (state, taxonId) => Vue.set(state.speciesData, taxonId, true);

export const ADD_SPECIE_DATA = (state, { taxonId, data, vbaData }) => {
  const isMuseumData = Object.prototype.hasOwnProperty.call(data, 'taxonomy');
  if (isMuseumData) {
    // reduce the data object to a subset
    // debugger;
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
    ].reduce((acc, prop) => Object.assign({}, acc,
      { [prop]: data[prop] }),
      { taxonomy: {
        commonName: vbaData.scientificDisplayNme,
        taxonName: vbaData.commonNme,
      },
      },
    );
    return Vue.set(state.speciesData, taxonId, subset);
  }
  const specieTemplate = {
    taxonomy: {
      family: getValue(data.family),
      kingdom: getValue(data.kingdom),
      commonName: getValue(vbaData.scientificDisplayNme),
      taxonName: getValue(vbaData.commonNme),
      // class: getValue(data.class),
      // genus: getValue(data.genus),
      // order: getValue(data.order),
      // phylum: getValue(data.order),
      // subclass: getValue(data.subclass),
    },
  };

  if (data.imageUrl) {
    // debugger;
    specieTemplate.media = [{
      large: {
        uri: data.largeImageUrl ? data.largeImageUrl.replace(/http:\/\//, 'https://') : null,
      },
      medium: {
        uri: data.imageUrl ? data.imageUrl.replace(/http:\/\//, 'https://') : null,
      },
      small: {
        uri: data.thumbnailUrl ? data.thumbnailUrl.replace(/http:\/\//, 'https://') : null,
      },
      thumbnail: {
        uri: data.thumbnailUrl ? data.thumbnailUrl.replace(/http:\/\//, 'https://') : null,
      },
      author: data.author,
      source: data.infoSourceName,
    }];
    return Vue.set(state.speciesData, taxonId, specieTemplate);
  }
  specieTemplate.media = [];
  if (!Array.isArray(data)) return Vue.set(state.speciesData, taxonId, specieTemplate);
  data.forEach((herbariumData) => {
    // debugger;
    specieTemplate.media.push({
      thumbnail: {
        uri: herbariumData.accessPoints.data.find(d => d.variant === 'thumbnail').accessURI,
      },
      medium: {
        uri: herbariumData.accessPoints.data.find(d => d.variant === 'preview').accessURI,
      },
      licence: herbariumData.license,
      author: herbariumData.creator,
      rights: herbariumData.rights,
    });
  });
  return Vue.set(state.speciesData, taxonId, specieTemplate);
};

export const UPDATE_SPECIE_DETAIL = (state, specie) => {
  Vue.set(state, 'selectedSpecie', specie);
};

export const ATTEMPT_MADE = (state) => {
  Vue.set(state, 'attemptSatus', true);
};
