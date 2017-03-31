<template>
  <div id="container">
    <md-button @click.native="close">
      <md-icon>arrow_back</md-icon>
    </md-button>
    <h1>{{specie.taxonomy.commonName}}</h1>
    <h2>{{specie.taxonomy.taxonName}}</h2>
    <!--  :style="backgroundImage" -->
    <div class="images">
      <md-button class="nav-button">
        <md-icon>navigate_before</md-icon>
      </md-button>
      <img :src="thumbnail">
      <md-button class="nav-button">
        <md-icon>navigate_next</md-icon>
      </md-button>
    </div>
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

export default {
  // props: ['specie'],
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

    backgroundImage() {
      const imageLink = this.thumbnail;

      if (imageLink) {
        const style = {
          background: `url(${imageLink}) center center no-repeat`,
          backgroundSize: 'contain',
        };
        return style;
      }
      const defaultStyle = {
        background: 'url(https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg)' +
                    'top center no-repeat',
      };
      return defaultStyle;
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
