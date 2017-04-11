/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

function convertConservation(status) {
  const threatenedRegex = [
    /L/,
    /P\s*L/,
    /cr/,
    /cr\s*dbt/,
    /cr\s*L/,
    /dd\s*L/,
    /en\s*/,
    /en\s*I/,
    /en\s*L/,
    /en\s*L\s*#/,
    /ex\s*L/,
    /k\s*\*/,
    /k\s*L/,
    /nt\s*L/,
    /r/,
    /r\s*#/,
    /r\s*D/,
    /r\s*L/,
    /r\s*N/,
    /r\s*X/,
    /rx\s*L/,
    /vu\s*/,
    /vu\s*#/,
    /vu\s*D/,
    /vu\s*L/,
    /vu\s*X/,
    /CR\s*cr\s*L/,
    /CR\s*dd\s*L/];

  const str = status.trim();
  if (str === '*') {
    console.log(`status ${status} is Not native`);
    return 'Not native';
  }
  const isThreatened = threatenedRegex.some((regex) => {
    return str.search(regex) !== -1;
  });

  console.log(`status ${status} is Threatened ? ${isThreatened}`);

  if (isThreatened) {
    return 'Threatened';
  }
  return null;
}

export const records = (state) => {
  return state.records;
};

export const selectedSpecieData = (state) => {
  const taxonId = state.selectedSpecie;
  if (!taxonId) return false;
  return state.speciesData[taxonId];
};

export const specieMedia = state => (taxonId) => {
  // getting specie data
  const specie = state.speciesData[taxonId];
  const media = specie ? specie.media : null;
  return media;
};

export const token = (state) => {
  return state.token;
};

export const species = (state) => {
  const speciesList = state.records.reduce((accuSpecies, specie) => {
    const specieClone = Object.assign({}, {
      commonNme: specie.commonNme,
      scientificDisplayNme: specie.scientificDisplayNme,
      taxonId: specie.taxonId,
      conservationStatus: convertConservation(specie.conservationStatus),
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

  return speciesList.sort((a, b) => {
    const nameA = a.scientificDisplayNme.toLowerCase();
    const nameB = b.scientificDisplayNme.toLowerCase();

    if (nameA < nameB) return -1; // sort string ascending
    if (nameA > nameB) return 1;
    return 0; // default return value (no sorting)
  });
};
