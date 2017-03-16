/* eslint-disable import/prefer-default-export */

export const records = (state) => {
  return state.records;
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
        : 1,
    });

    // specie already present in species ? increment count : add to species
    const specieIndex = accuSpecies
      .findIndex(accuspecie => accuspecie.taxonId === specieClone.taxonId);

    if (specieIndex > -1) {
      specieClone.totalCountInt += accuSpecies[specieIndex].totalCountInt;
      return [...accuSpecies.slice(0, specieIndex),
        specieClone,
        ...accuSpecies.slice(specieIndex + 1)];
    }
    return [...accuSpecies, specieClone];
  }, []);

  // return species;
};
