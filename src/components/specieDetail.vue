<template>
  <div id="container">
    <md-button @click.native="close">
      <md-icon>arrow_back</md-icon>
    </md-button>
    <h1>{{specie.taxonomy.commonName}}</h1>
    <h2>{{specie.taxonomy.taxonName}}</h2>

    <imgSlider></imgSlider>

    <div class="description">
      <h3>Description :</h3>
      <p>{{description}}</p>
    </div>
      <h3>Habitat :</h3>
      <p>{{specie.habitat}}</p>

      <h3>Biology :</h3>
      <p>{{specie.biology}}</p>

      <h3>Distribution :</h3>
      <p>{{specie.distribution}}</p>
    <div class="records"></div>
  </div>
</template>

<script>
import imgSlider from './imgSlider';

export default {
  // props: ['specie'],
  components: {
    imgSlider,
  },
  data() {
    const data = { // eslint-disable-line no-unused-vars
      specie: this.$store.getters.selectedSpecieData,
    };
    return data;
  },
  computed: {
    thumbnail() {
      const media = this.$store.getters.specieMedia(this.specie.vbaTaxonId);
      if (!media) return false;
      console.log('media', media);
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      return false;
    },

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
