import { guestLogin, recordsByPosition } from '../api/vba';

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

  recordsByPosition(position, token)
    .then(records => commit('SET_RECORDS', records));
};

export const getPosition = ({ commit }) => {
  return new Promise(res => res({ accu: '12', lat: '-37.809610', long: '144.972052' }))
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 10000,
  //   maximumAge: 0,
  // };
  // return new Promise((resolve, reject) => {
  //   if (!('geolocation' in navigator))
  //     reject(new Error('no geolocation feature present on device'));

  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       const accu = pos.coords.accuracy;
  //       const lat = pos.coords.latitude;
  //       const long = pos.coords.longitude;
  //       console.log(`Position aquired, accuracy : ${pos.coords.accuracy}`);
  //       resolve({ accu, lat, long });
  //     },
  //     (err) => {
  //       // console.log(err);
  //       reject(new Error(err.message));
  //     }, options);
  // })
  .then(position => commit('SET_POSITION', position))
  .catch(error => console.log(error));
};
