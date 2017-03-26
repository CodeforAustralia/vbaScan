/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export const records = (state) => {
  return state.records;
};

export const museumSpecie = state => (taxonId) => {
  // console.log(state.museumSpecies);
  if (!state.museumSpecies.length) return false;
  const mSpecie = state.museumSpecies.find(ms => ms.vbaTaxonId === taxonId);
  return mSpecie;
};

export const museumSpecieMedia = state => (taxonId) => {
  const mSpecie = state.museumSpecies.find(ms => ms.vbaTaxonId === taxonId);
  if (!mSpecie) return false;
  if (Object.prototype.hasOwnProperty.call(mSpecie, 'media')) return mSpecie.media;
  return false;
};

export const token = (state) => {
  return state.token;
};

export const species = (state) => {
  return state.records.reduce((accuSpecies, specie) => {
    const specieClone = Object.assign({}, {
      commonNme: specie.commonNme,
      scientificDisplayNme: specie.scientificDisplayNme,
      taxonId: specie.taxonId,
      totalCountInt: Object.prototype.hasOwnProperty.call(specie, 'totalCountInt')
        ? specie.totalCountInt
        : null,
    });

    // filter out records with totalCount set to 0
    if (specieClone.totalCountInt === 0) return accuSpecies;

    // specie already present in accuSpecies ? increment count : add to species
    const specieIndex = accuSpecies
      .findIndex(s => s.taxonId === specieClone.taxonId);

    if (specieIndex > -1) {
      // add up the total count of both records
      specieClone.totalCountInt += accuSpecies[specieIndex].totalCountInt;
      return [
        ...accuSpecies.slice(0, specieIndex),
        specieClone,
        ...accuSpecies.slice(specieIndex + 1),
      ];
    }
    return [...accuSpecies, specieClone];
  }, []);
};
