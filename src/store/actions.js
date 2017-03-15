import { guestLogin, recordsByLocation } from '../api/vba';
// import store from '../store';

/* eslint-disable import/prefer-default-export */

export const fetchToken = ({ commit }) => {
  guestLogin()
    .then((token) => {
      console.log('response body : ', token);
      commit('SET_TOKEN', token);
    });
};

export const fetchRecordsByLocation = ({ commit, state }) => {
  const token = state.token;
  const location = {
    lat: '-37.809611',
    long: '144.972052',
    rad: 250,
  };

  recordsByLocation(location, token)
    .then(records => commit('SET_RECORDS', records));
    // .then((records) => {
    //   console.log(records);
    //   commit('SET_RECORDS', records);
    // });
};

export const getPosition = ({ commit }) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
  // return new Promise(res => res({ accu: '12', lat: '-37.809610', long: '144.972052' }));
  return new Promise((resolve, reject) => {
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
        // console.log(err);
        reject(new Error(err.message));
      }, options);
  }).then(position => commit('SET_POSITION', position))
  .catch(error => console.log(error));
};
