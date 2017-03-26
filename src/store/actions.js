/* eslint-disable arrow-body-style */

import { guestLogin, recordsByPosition /* , vbaSpecieSearch */} from '../api/vba';
import { searchMuseumSpecies } from '../api/museum';

function filterDuplicateSpecies(records) {
  const species = records.reduce((acc, record) => {
    // filter out records with totalCount set to 0
    if (record.totalCountInt === 0) return acc;
    const index = acc.findIndex(r => r.taxonId === record.taxonId);
    if (index === -1) acc.push(record);
    return acc;
  }, []);
  return species;
}

export const fetchToken = ({ commit }) => {
  guestLogin()
    .then((token) => {
      console.log('response body : ', token);
      commit('SET_TOKEN', token);
    });
};

export const fetchRecordsByLocation = ({ commit, state }) => {
  const token = state.token;
  const position = {
    lat: state.position.lat,
    long: state.position.long,
    rad: 250,
  };

  return recordsByPosition(position, token)
    .then((records) => {
      commit('SET_RECORDS', records);
      const species = filterDuplicateSpecies(records);
      species.forEach((specie) => {
        // Make AJAX call to museum vic with specie scientific name
        searchMuseumSpecies(specie.scientificDisplayNme)
          .then((specieData) => {
            if (!specieData) return;
            const hydratedSpecie = Object.assign({}, specieData, { vbaTaxonId: specie.taxonId });
            console.log(hydratedSpecie);
            commit('ADD_MUSEUM_SPECIES', hydratedSpecie);
          });
      });
    });
};

export const hydrateSpecies = ({ commit }, specieName) => {
  searchMuseumSpecies(specieName)
    .then(specieData => commit('ADD_MUSEUM_SPECIES', specieData));
  // getters.species.forEach((specie) => {
  //   vbaSpecieSearch(specie.taxonId)
  //     .then(specieData => commit('ADD_MUSEUM_SPECIES', specieData));
  // });
};

export const getPosition = ({ commit }) => {
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 10000,
  //   maximumAge: 0,
  // };
  // return new Promise((resolve, reject) => {
  // eslint-disable-next-line
  //   if (!('geolocation' in navigator)) reject(new Error('no geolocation feature present on device'));

  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       const accu = pos.coords.accuracy;
  //       const lat = pos.coords.latitude;
  //       const long = pos.coords.longitude;
  //       console.log(`Position aquired, accuracy : ${pos.coords.accuracy}`);
  //       resolve({ accu, lat, long });
  //     },
  //     (err) => {
  //       reject(new Error(err.message));
  //     }, options);
  // })

  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    resolve({ accu: '12', lat: '-37.809610', long: '144.972052' });
  })
  .then(position => commit('SET_POSITION', position))
  .catch(error => console.log(error));
};

export const switchView = ({ commit }) => {
  commit('SWITCH_VIEW');
};

export const updateFilter = ({ commit }, filter) => {
  commit('UPDATE_FILTER', filter);
};

export const switchProgress = ({ commit }) => {
  commit('SWITCH_PROGRESS');
};

