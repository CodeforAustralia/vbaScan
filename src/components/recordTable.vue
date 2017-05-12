<template>
  <div>
    <listFilter></listFilter>
    <component :is="currentComponent"></component>
    <p v-if="this.$store.getters.species.length > 10">{{this.$store.getters.species.length}} specie found, showing 8 per page.</p>
  </div>
</template>

<script>
import listFilter from './listFilter';
import specieList from './specieList';
// import byDistanceList from './byDistanceList';

export default {
  components: {
    listFilter,
    // byDistanceList,
    specieList,
  },
  computed: {
    currentComponent() {
      // Render component when records are available
      if (!this.$store.getters.species.length) return null;
      return 'specieList';
    },
  },
  methods: {
    selectSpecie(taxonId) {
      console.log(taxonId);
      this.$store.dispatch('setSpecieDetail', taxonId);
    },
  },

};
</script>

<style scoped>
.card-layout {
  margin-right: 4px;
}
</style>
