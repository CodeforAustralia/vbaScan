/* eslint-disable arrow-body-style */

import { guestLogin, recordsByPosition, speciesByPosition /* , vbaSpecieSearch */} from '../api/vba';
import { searchMuseumSpecies } from '../api/museum';
import { searchALASpecies } from '../api/atlasLivingAus';
import { searchHerbariumSpecies } from '../api/herbarium';

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

export const clearRecords = ({ commit }) => {
  commit('CLEAR_RECORDS');
};

export const fetchToken = ({ commit }) => {
  guestLogin()
    .then((token) => {
      console.log('response body : ', token);
      commit('SET_TOKEN', token);
    });
};

export const searchRecords = ({ commit, state }) => {
  const token = state.token;
  const position = {
    lat: state.position.lat,
    long: state.position.long,
    rad: state.searchRadius,
  };
  // fetch species
  speciesByPosition(position, token)
    .then((species) => {
      commit('SET_SPECIES', species);
    });
  // fetch records
  // recordsByPosition(position, token)
  //   .then((records) => {
  //     commit('SET_RECORDS', records);
  //   });
};

export const hydrateSpecie = ({ commit, state }, taxonId) => {
  const specie = state.species.find(s => s.taxonId === taxonId);
  const token = state.token;
  const position = {
    lat: state.position.lat,
    long: state.position.long,
    rad: state.searchRadius,
  };
  // check if the request was already performed.
  if (state.speciesData[taxonId]) return Promise.resolve();
  commit('HYDRA_SPECIE', taxonId);
  const taxonomy = {
    scientificName: specie.scientificDisplayNme,
    commonName: specie.commonNme,
  };
  console.log('hydrating', specie.taxonId);

  recordsByPosition(position, taxonId, token)
    .then((records) => {
      console.log(`found ${records.length} obs for ${taxonId} : ${taxonomy.commonName}`);
      commit('SET_RECORDS', records);
    });

  if (specie.primaryCde === 'Flora') {
    return searchHerbariumSpecies(taxonomy)
      .then((herbariumSpecies) => {
        if (herbariumSpecies.length > 0) {
          return commit('ADD_SPECIE_DATA', {
            taxonId: specie.taxonId,
            data: herbariumSpecies,
            vbaData: specie,
          });
        }
        // If the Vic museum doesnt return data, lookup the ALA
        return searchALASpecies(taxonomy)
          .then((alaSpecie) => {
            if (alaSpecie) {
              return commit('ADD_SPECIE_DATA', {
                taxonId: specie.taxonId,
                data: alaSpecie,
                vbaData: specie,
              });
            }
            return commit('ADD_SPECIE_DATA', {
              taxonId: specie.taxonId,
              data: {
                commonName: specie.commonNme,
                name: specie.scientificDisplayNme,
              },
              vbaData: specie,
            });
          });
      });
  }

  return searchMuseumSpecies(taxonomy)
    .then((museumSpecie) => {
      if (museumSpecie) {
        return commit('ADD_SPECIE_DATA', {
          taxonId: specie.taxonId,
          data: museumSpecie,
          vbaData: specie,
        });
      }
      return searchHerbariumSpecies(taxonomy)
        .then((herbariumSpecies) => {
          if (herbariumSpecies.length > 0) {
            return commit('ADD_SPECIE_DATA', {
              taxonId: specie.taxonId,
              data: herbariumSpecies,
              vbaData: specie,
            });
          }
          // If the Vic museum doesnt return data, lookup the ALA
          return searchALASpecies(taxonomy)
            .then((alaSpecie) => {
              if (alaSpecie) {
                return commit('ADD_SPECIE_DATA', {
                  taxonId: specie.taxonId,
                  data: alaSpecie,
                  vbaData: specie,
                });
              }
              return commit('ADD_SPECIE_DATA', {
                taxonId: specie.taxonId,
                data: {
                  commonName: specie.commonNme,
                  name: specie.scientificDisplayNme,
                },
                vbaData: specie,
              });
            });
        });
    });
};

export const fetchRecordsByLocation = ({ commit, state }) => {
  const token = state.token;
  const position = {
    lat: state.position.lat,
    long: state.position.long,
    rad: state.searchRadius,
  };

  return recordsByPosition(position, token)
    .then((records) => {
      commit('SET_RECORDS', records);
      const species = filterDuplicateSpecies(records);
      species.forEach((specie) => {
        const taxonomy = {
          scientificName: specie.scientificDisplayNme,
          commonName: specie.commonNme,
        };

        searchMuseumSpecies(taxonomy)
          .then((museumSpecie) => {
            if (museumSpecie) {
              return commit('ADD_SPECIE_DATA', {
                taxonId: specie.taxonId,
                data: museumSpecie,
                vbaData: specie,
              });
            }
            return searchHerbariumSpecies(taxonomy)
              .then((herbariumSpecies) => {
                if (herbariumSpecies.length > 0) {
                  return commit('ADD_SPECIE_DATA', {
                    taxonId: specie.taxonId,
                    data: herbariumSpecies,
                    vbaData: specie,
                  });
                }
                // If the Vic museum doesnt return data, lookup the ALA
                return searchALASpecies(taxonomy)
                  .then((alaSpecie) => {
                    if (alaSpecie) {
                      return commit('ADD_SPECIE_DATA', {
                        taxonId: specie.taxonId,
                        data: alaSpecie,
                        vbaData: specie,
                      });
                    }
                    return commit('ADD_SPECIE_DATA', {
                      taxonId: specie.taxonId,
                      data: {
                        commonName: specie.commonNme,
                        name: specie.scientificDisplayNme,
                      },
                      vbaData: specie,
                    });
                  });
              });
          });
      });
    });
};

export const hydrateSpecies = ({ commit }, specieName) => {
  searchMuseumSpecies(specieName)
    .then((specieData) => {
      if (specieData) commit('ADD_MUSEUM_SPECIES', specieData);
    });
  // getters.species.forEach((specie) => {
  //   vbaSpecieSearch(specie.taxonId)
  //     .then(specieData => commit('ADD_MUSEUM_SPECIES', specieData));
  // });
};

export const getPosition = ({ commit }) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
  return new Promise((resolve, reject) => {
  // eslint-disable-next-line
    if (!('geolocation' in navigator)) reject(new Error('no geolocation feature present on device'));

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const accu = pos.coords.accuracy;
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        console.log(`Position aquired, accuracy : ${pos.coords.accuracy}`);
        resolve({ accu, lat, long });
      },
      (err) => {
        // reject(new Error(err.message));
        console.log(new Error(err.message));
        resolve({ accu: '12', lat: '-36.731842', long: '147.812758' });
      }, options);
  })
  // -36.731842, 147.812758
  // eslint-disable-next-line
  // return new Promise((resolve, reject) => {
  //   resolve({ accu: '12', lat: '-36.731842', long: '147.812758' });
  // })
  // eslint-disable-next-line
  // return new Promise((resolve, reject) => {
  //   const minLat = 36.283390;
  //   const maxLat = 38.237969;
  //   const minLong = 141.123133;
  //   const maxLong = 147.858152;

  // eslint-disable-next-line
    // const randLat = Math.round((Math.random()*(maxLat-minLat+1)+minLat) * 1000000 ) / 1000000;
  // eslint-disable-next-line
    // const randLong = Math.round((Math.random()*(maxLong-minLong+1)+minLong) * 1000000 ) / 1000000;
    // console.log(`${randLat} ${randLong}`);
    // resolve({ accu: '12', lat: -`${randLat}`, long: `${randLong}` });
  // })
  .then(position => commit('SET_POSITION', position))
  .catch(error => console.log(error));
};

export const attemptMade = ({ commit }) => {
  commit('ATTEMPT_MADE');
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

export const setSpecieDetail = ({ commit }, taxonId) => {
  commit('UPDATE_SPECIE_DETAIL', taxonId);
};
