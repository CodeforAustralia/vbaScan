<template>
  <div>
    <listFilter></listFilter>
    <md-list class="list" v-if="this.$store.state.listView && this.$store.getters.records.length">
        <listItem v-for="(item, index) in items" :record="item" :key="index" 
                  @click.native="selectSpecie(item.taxonId)"></listItem>
    </md-list>
    <md-layout v-else class="card-layout">
      <gridListItem v-for="item in items" :record="item"></gridListItem>
    </md-layout>
    <p v-if="this.$store.getters.species.length > 10">{{this.$store.getters.species.length}} items available, Only showing first 10</p>
  </div>
</template>

<script>
import listItem from './listItem';
import gridListItem from './gridListItem';
import listFilter from './listFilter';

export default {
  components: {
    listItem,
    gridListItem,
    listFilter,
  },
  computed: {
    items() {
      switch (this.$store.state.filter) {
        case 'commonName':
          console.log('filter by commonName');
          return this.byCommonName().slice(0, 9);
        case 'scientificName':
          console.log('filter by scientificName');
          return this.byScientificName().slice(0, 11);
        default:
          return this.byScientificName().slice(0, 11);
      }
    },
  },
  methods: {
    selectSpecie(taxonId) {
      console.log(taxonId);
      this.$store.dispatch('setSpecieDetail', taxonId);
    },

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
.card-layout {
  margin-right: 4px;
}
</style>
