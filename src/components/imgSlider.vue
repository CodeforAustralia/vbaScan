<template>
  <div class="images">
    <md-button @click.native="previous"
      :class="{hidden: (!this.selectedImg > 0)}"
      class="nav-button">
      <md-icon>navigate_before</md-icon>
    </md-button>
    <img :src="currentImage">
    <md-button @click.native="next"
      :class="{hidden: (this.selectedImg >= this.media.length - 1)}"
      class="nav-button">
      <md-icon>navigate_next</md-icon>
    </md-button>
  </div>
</template>

<script>

export default {
  data() {
    const data = { // eslint-disable-line no-unused-vars
      specie: this.$store.getters.selectedSpecieData,
      selectedImg: 0,
    };
    return data;
  },
  computed: {
    media() {
      const media = this.specie.media;
      if (media) return media;
      return null;
    },
    currentImage() {
      console.log(this.selectedImg, this.media[this.selectedImg]);
      const media = this.media[this.selectedImg];
      const uri = Object.prototype.hasOwnProperty.call(media, 'small')
      ? media.small.uri
      : media.thumbnail.uri;
      return uri;
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
  /*color: white;*/
  justify-content: center;
  background-color: rgba(128,128,128,.4);
}

.hidden {
  visibility: hidden;
}
</style>
