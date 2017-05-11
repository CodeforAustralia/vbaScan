/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

function convertConservation(status) {
  if (!status) return null;
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
    // console.log(`status ${status} is Not native`);
    return 'Not native';
  }
  const isThreatened = threatenedRegex.some((regex) => {
    return str.search(regex) !== -1;
  });
  // console.log(`status ${status} is Threatened ? ${isThreatened}`);
  if (isThreatened) {
    return 'Threatened';
  }
  return null;
}

const toRad = value => (value * Math.PI) / 180;

const distanceBetweenCoordinates = (lat1, lon1, lat2, lon2) => {
  const earthRadiusKm = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
};

export const records = (state) => {
  // calcul distance from record to user's position.
  const rawRecords = state.records;
  const userLat = state.position.lat;
  const userLon = state.position.long;

  const recordsWithDistance = rawRecords.map((record) => {
    const recordLat = record.latitudeddNum;
    const recordLon = record.longitudeddNum;

    const distance = distanceBetweenCoordinates(userLat, userLon, recordLat, recordLon);
    return Object.assign({}, record, { distance });
  });
  return recordsWithDistance;
};

export const selectedSpecieData = (state) => {
  const taxonId = state.selectedSpecie;
  if (!taxonId) return false;
  return state.speciesData[taxonId];
};

export const specieMedia = state => (taxonId) => {
  const specie = state.speciesData[taxonId];
  const media = specie ? specie.media : null;
  return media;
};

export const token = (state) => {
  return state.token;
};

export const species = (state) => {
  if (!(state.species.length > 0)) return [];
  // countOfSightings
  const speciesList = state.species.reduce((accu, specie) => {
    const specieClone = Object.assign({}, {
      commonNme: specie.commonNme,
      // countOfSightings: specie.countOfSightings,
      commonNmeSynonym: specie.commonNmeSynonym,
      lastRecord: specie.lastRecord,
      // parentTaxonId:specie.parentTaxonId,
      primaryCd: specie.primaryCde,
      scientificDisplayNme: specie.scientificDisplayNme,
      scientificNme: specie.scientificNme,
      scientificNmeSynonym: specie.scientificNmeSynonym,
      shortName: specie.shortName,
      taxonId: specie.taxonId,
      // taxonLevelCde:specie.taxonLevelCde,
      // taxonTypeCde:specie.taxonTypeCde,
      conservationStatus: convertConservation(specie.conservationStatus),
      countOfSightings: Object.prototype.hasOwnProperty.call(specie, 'countOfSightings')
        ? specie.countOfSightings
        : null,
    });
    // filter out records with totalCount set to 0
    if (specieClone.countOfSightings === 0) return accu;
    return [...accu, specieClone];
  });
  if (!Array.isArray(speciesList)) return [speciesList];
  return speciesList;
};

export const Oldspecies = (state) => {
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

  return speciesList;
};
