<template>
  <md-whiteframe md-elevation="1" class="card">
    <div class="card-content" :style="backgroundImage">
      <p class="specie-name truncate">{{commonName}}</p>
    </div>
  </md-whiteframe>
</template>

<script>
export default {
  props: {
    commonName: {
      type: String,
      default() { return this.scientificName || ''; },
    },
    scientificName: {
      type: String,
      default() { return ''; },
    },
    taxonId: {
      type: Number,
      default() { return undefined; },
    },
  },
  methods: {
  },
  computed: {
    thumbnail() {
      const media = this.$store.getters.specieMedia(this.taxonId);
      if (!media) return false;
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      if (Object.prototype.hasOwnProperty.call(media[0], 'thumbnail')) return media[0].thumbnail.uri;
      return false;
    },
    backgroundImage() {
      const imageLink = this.thumbnail;
      if (imageLink) {
        const style = {
          background: `url(${imageLink}) center center no-repeat` +
                      ',linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%)' +
                      `,url(${imageLink}) no-repeat`,
          backgroundSize: 'contain, contain, cover',
        };
        return style;
      }
      const defaultStyle = {
        background: 'url(https://raw.githubusercontent.com/Ranks/emojione/2.2.7/assets/png_128x128/1f43e.png)' +
                    'top center no-repeat',
      };
      return defaultStyle;
    },
  },
};
</script>
<style scoped>

.card {
  width: 48vw;
  max-width: 48vw;
  margin: 0 0 4px 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white; /* fallback */
  flex-grow: 1;
}

.card-content {
  align-items: flex-end;
  height: 25vh;
  display: flex;
  justify-content: center;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.specie-name {
  background-color: rgba(127, 133, 137, 0.7);
  font-size: 1rem;
  color: white;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0.4rem 1rem 0.4rem 1rem;
}
</style>
