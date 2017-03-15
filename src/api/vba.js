import axios from 'axios';

export const guestLogin = () => axios
  .get('https://vbapi.herokuapp.com/auth/guest')
  .then(res => res.data.jwt)
  .catch(error => console.log(error.message));

export const recordsByLocation = (location, token) => axios
  .get('https://vbapi.herokuapp.com/search/point', {
    headers: { 'x-access-token': token },
    params: location,
  })
  .then(res => res.data.records)
  .catch(error => console.log(error.message));
