<template>
  <div id="container">
    <h1>{{specie.taxonomy.commonName}}</h1>
    <h2>{{specie.taxonomy.taxonName}}</h2>
    <div class="images">
      <img :src="thumbnail">
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
  props: ['specie'],
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
};
</script>

<style scoped>
#container {
  margin: 1rem;
}

.images {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
}

.images img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
