import axios from 'axios';
// https://vbapi.herokuapp.com
const apiServer = 'https://vbapi.herokuapp.com';

export const guestLogin = () => axios
  .get(`${apiServer}/auth/guest`)
  .then(res => res.data.jwt)
  .catch(error => console.log(error.message));

export const speciesByPosition = (position, token) => axios
  .get(`${apiServer}/search/point`, {
    headers: { 'x-access-token': token },
    params: position,
  })
  .then(res => res.data.records)
  .catch(error => console.log(error.message));

export const recordsByPosition = (position, taxonId, token) => axios
  .get(`${apiServer}/search/point`, {
    headers: { 'x-access-token': token },
    params: Object.assign({}, position, { detail: true, taxonId }),
  })
  .then(res => res.data.records)
  .catch(error => console.log(error.message));

export const vbaSpecieSearch = taxonId => axios
  .get(`${apiServer}/species/${taxonId}`)
  .then(res => res.data)
  .catch(error => console.log(error.message));
