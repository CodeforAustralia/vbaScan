<template>
  <md-list class="list">
    <listItem v-for="(item, index) in items"
      :item="item" 
      :key="index" 
      @click.native="selectSpecie(item.taxonId)">
    </listItem>
  </md-list>
</template>
<script>
import listItem from './listItem';

export default {
  components: {
    listItem,
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
  
</style>
