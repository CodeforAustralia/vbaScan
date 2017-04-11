<template>
  <div id="container">
    <md-button @click.native="close">
      <md-icon>arrow_back</md-icon>
    </md-button>
    <h1>{{specie.taxonomy.commonName}}</h1>
    <h2>{{specie.taxonomy.taxonName}}</h2>

    <imgSlider v-if="specie.media"></imgSlider>

    <div class="description">
    <template v-if="description">
      <h3>Description :</h3>
      <p>{{description}}</p>
    </template>
    </div>
    <template v-if="specie.habitat">
      <h3>Habitat :</h3>
      <p>{{specie.habitat}}</p>
    </template>
    <template v-if="specie.biology">
      <h3>Biology :</h3>
      <p>{{specie.biology}}</p>
    </template>
    <template v-if="specie.distribution">
      <h3>Distribution :</h3>
      <p>{{specie.distribution}}</p>
    </template>
    <h2>Observation : </h2>
    <recordList></recordList>
  </div>
</template>

<script>
import imgSlider from './imgSlider';
import recordList from './recordList';

export default {
  components: {
    imgSlider,
    recordList,
  },
  data() {
    const data = { // eslint-disable-line no-unused-vars
      specie: this.$store.getters.selectedSpecieData,
    };
    return data;
  },
  computed: {
    description() {
      console.log(this.specie.generalDescription);
      return this.specie.generalDescription;
    },
  },
  methods: {
    close() {
      console.log('closing details page');
      this.$store.dispatch('setSpecieDetail', null);
    },
  },
};
</script>

<style scoped>
#container {
  margin: 1rem;
}

.images {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30vh;
  /*overflow: auto*/
}

.images img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  overflow: auto;
}

.nav-button {
  display: flex;
  max-width: 10vw;
  color: white;
  justify-content: center;
  background-color: rgba(128,128,128,.4);
}
</style>
