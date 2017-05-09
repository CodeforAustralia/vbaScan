import axios from 'axios';

export const guestLogin = () => axios
  .get('https://vbapi.herokuapp.com/auth/guest')
  .then(res => res.data.jwt)
  .catch(error => console.log(error.message));

export const speciesByPosition = (position, token) => axios
  .get('https://vbapi.herokuapp.com/search/point', {
    headers: { 'x-access-token': token },
    params: position,
  })
  .then(res => res.data.records)
  .catch(error => console.log(error.message));

export const recordsByPosition = (position, token) => axios
  .get('https://vbapi.herokuapp.com/search/point', {
    headers: { 'x-access-token': token },
    params: Object.assign({}, position, { detail: true }),
  })
  .then(res => res.data.records)
  .catch(error => console.log(error.message));

export const vbaSpecieSearch = taxonId => axios
  .get(`https://vbapi.herokuapp.com/species/${taxonId}`)
  .then(res => res.data)
  .catch(error => console.log(error.message));
