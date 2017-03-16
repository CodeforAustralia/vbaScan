import { expect } from 'chai';
import { species } from '../getters';
import { records, speciesList } from './mockData';

// destructure assign mutations
// const { species } = getters;

describe('getters', () => {
  it('filteredRecordsBySpecies', () => {
    // mock state
    const state = {
      records,
    };

    // get the result from the getter
    const result = species(state);

    // assert the result
    expect(result).to.deep.equal(speciesList);
  });
});
