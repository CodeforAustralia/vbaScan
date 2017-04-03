<template>
  <div class="images">
    <md-button @click.native="previous" class="nav-button">
      <md-icon>navigate_before</md-icon>
    </md-button>
    <img :src="currentImage">
    <md-button @click.native="next" class="nav-button">
      <md-icon>navigate_next</md-icon>
    </md-button>
  </div>
</template>

<script>

export default {
  // props: ['specie'],
  data() {
    const data = { // eslint-disable-line no-unused-vars
      specie: this.$store.getters.selectedSpecieData,
      selectedImg: 0,
    };
    return data;
  },
  computed: {
    media() {
      const media = this.$store.getters.specieMedia(this.specie.vbaTaxonId);
      if (!media) return false;
      console.log('media', media);
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media;
      return false;
    },
    currentImage() {
      console.log(this.selectedImg, this.media[this.selectedImg]);
      return this.media[this.selectedImg].small.uri;
    },
  },
  methods: {
    next() {
      if (this.selectedImg < this.media.length - 1) this.selectedImg += 1;
    },
    previous() {
      console.log(this.media.length);
      if (this.selectedImg > 0) this.selectedImg -= 1;
    },
  },
};
</script>

<style scoped>
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
