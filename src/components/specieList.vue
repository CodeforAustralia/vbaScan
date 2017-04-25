<template>
  <md-list class="list">
    <specieListItem v-for="(specie, index) in items"
      :commonName="specie.commonNme"
      :conservationStatus="specie.conservationStatus"
      :scientificName="specie.scientificDisplayNme"
      :taxonId="specie.taxonId" 
      :key="index" 
      @click.native="selectSpecie(item.taxonId)">
    </specieListItem>
  </md-list>
</template>
<script>
import specieListItem from './specieListItem';

export default {
  components: {
    specieListItem,
  },
  computed: {
    items() {
      switch (this.$store.state.filter) {
        case 'commonName':
          return this.byCommonName().slice(0, 10);
        case 'scientificName':
          return this.byScientificName().slice(0, 10);
        default:
          return this.byScientificName().slice(0, 10);
      }
    },
  },
  methods: {
    byScientificName() {
      const species = this.$store.getters.species;
      const filteredSpecies = species.sort((a, b) => {
        const nameA = a.scientificDisplayNme.toLowerCase();
        const nameB = b.scientificDisplayNme.toLowerCase();

        if (nameA < nameB) return -1; // sort string ascending
        if (nameA > nameB) return 1;
        return 0; // default return value (no sorting)
      });
      return filteredSpecies || [];
    },

    byCommonName() {
      const species = this.$store.getters.species;
      const filteredSpecies = species.sort((a, b) => {
        const nameA = a.commonNme.toLowerCase();
        const nameB = b.commonNme.toLowerCase();

        if (nameA < nameB) return -1; // sort string ascending
        if (nameA > nameB) return 1;
        return 0; // default return value (no sorting)
      });
      return filteredSpecies || [];
    },
  },
};
</script>

<style scoped>

.list{
  padding-top: 0;
  padding-bottom: 0;
}
</style>
