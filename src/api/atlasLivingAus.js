// http://bie.ala.org.au/ws/search.json?q={q}&fq={fq}
import axios from 'axios';

// eslint-disable-next-line
export const searchALASpecies = (specieName) => axios
  .get('https://bie.ala.org.au/ws/search.json', {
    params: {
      q: specieName,
    },
  })
  .then((res) => {
    // only return VicMuseum species matching the initial query
    const specie = res.data.searchResults.results
      .find((s) => {
        return s.scientificName === res.config.params.q;
      });
    return specie;
  })
  .catch(error => console.log(error.message));
