// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: {
    color: 'purple',
    hue: 900,
  },
  // primary: #201647,
  // accent: '#00b7bd',
  accent: {
    color: 'teal',
    hue: 'A700',
  },
  warn: 'red',
  background: {
    color: 'grey',
    hue: 300,
  },
});

Vue.material.setCurrentTheme('default');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
