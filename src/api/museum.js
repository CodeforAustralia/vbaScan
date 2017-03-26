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
  .then((res) => {
    // only return VicMuseum species matching the initial query
    const specie = res.data.find(s => s.taxonomy.taxonName === res.config.params.query);
    return specie;
  })
  .catch(error => console.log(error.message));
