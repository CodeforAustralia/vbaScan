export default {
  guestLogin() {
    return fetch('https://vbapi.herokuapp.com/auth/guest');
  },
};
