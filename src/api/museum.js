// https://collections.museumvictoria.com.au/api/search?query=possum&recordtype=species

import axios from 'axios';

// eslint-disable-next-line
export const searchMuseumSpecies = (specieName) => axios
  .get('https://collections.museumvictoria.com.au/api/search', {
    params: {
      query: specieName,
      recordtype: 'species',
    },
  })
  .then(res => res.data[0])
  .catch(error => console.log(error.message));
