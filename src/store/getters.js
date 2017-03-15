/* eslint-disable import/prefer-default-export */

export const species = (state) => {
  console.log('getter accesed');
  return state.records;
};

export const token = (state) => {
  console.log('token accesed');
  return state.token;
};
