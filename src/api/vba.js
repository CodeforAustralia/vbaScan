function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const guestLogin = () => fetch('https://vbapi.herokuapp.com/auth/guest')
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data.jwt)
  .catch(error => console.log(error.message));


export const recordsByLocation = (location, token) => {
  // debugger;
  if (!token) return Promise.reject(new Error('No token available'));
  const params = location;
  const url = new URL('https://vbapi.herokuapp.com/search/point');
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      'x-access-token': token,
    }),
  });

  return fetch(request)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data.records)
    .catch(error => console.log(error.message));
};
