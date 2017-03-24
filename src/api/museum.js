// https://collections.museumvictoria.com.au/api/search?query=possum&recordtype=species

import axios from 'axios';

// eslint-disable-next-line
export const searchMuseumSpecies = (position, token) => axios
  .get('https://collections.museumvictoria.com.au/api/search', {
    params: {
      query: 'possum',
      recordtype: 'species',
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    // 'query=possum&recordtype=species',
  })
  .then(res => res.data)
  .catch(error => console.log(error.message));
