import Vue from 'vue';
import Vuex from 'vuex';
import Hello from '@/components/Hello';
import * as getters from '@/store/getters';

Vue.use(Vuex);

const mockedStore = {
  state: {
    token: '12123',
    records: ['possum', 'rat', 'bat'],
    species: ['possum', 'rat', 'bat'],
    position: { lat: '1233123', long: '121231' },
  },
  getters,
};

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({
      template: '<div><Hello></Hello></div>',
      components: { Hello },
      store: new Vuex.Store(mockedStore),
    });
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to VBA scan');
  });
});
