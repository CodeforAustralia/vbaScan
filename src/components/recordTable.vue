<template>
  <div>
    <listFilter></listFilter>
    <component :is="currentComponent"></component>
    <!-- <md-layout v-else class="card-layout">
      <gridListItem v-for="item in items" 
        :record="item"
        @click.native="selectSpecie(item.taxonId)">
      </gridListItem>
    </md-layout> -->
    <p v-if="this.$store.getters.species.length > 10">{{this.$store.getters.species.length}} items available, Only showing first 10</p>
  </div>
</template>

<script>
// import listItem from './listItem';
import gridListItem from './gridListItem';
import listFilter from './listFilter';
import specieList from './specieList';
import byDistanceList from './byDistanceList';

export default {
  components: {
    // listItem,
    gridListItem,
    listFilter,
    byDistanceList,
    specieList,
  },
  computed: {
    currentComponent() {
      // Render component when records are available
      if (!this.$store.getters.records.length) return null;
      // Render the grid view
      if (!this.$store.state.listView) return 'gridListItem';
      // Render component based on filter selection
      switch (this.$store.state.filter) {
        case 'distance':
          return 'byDistanceList';
        default:
          return 'specieList';
      }
    },
  },
  methods: {
    selectSpecie(taxonId) {
      console.log(taxonId);
      this.$store.dispatch('setSpecieDetail', taxonId);
    },

    distanceGroup() {
      const speciesDistance = this.byDistance()
        .map(specie => specie.closestRecordDistance);
      const min = speciesDistance[0] * 1000;
      const max = speciesDistance[speciesDistance.length - 1] * 1000;
      const group = 5;
      const groupSize = Math.round((max - min) / group);

      const groupBoundaries = [];

      for (let i = min; i <= max; i += i + groupSize) {
        groupBoundaries.push(Math.round(i));
      }
      return groupBoundaries;
    },

    byDistance() {
      const species = this.$store.getters.species;
      const speciesWithClosestRecord = species.map((specie) => {
        const taxonId = specie.taxonId;
        const records = this.$store.getters.records.filter(record => record.taxonId === taxonId);
        const closestRecord = records.sort((a, b) => a.distance - b.distance)[0];
        return Object.assign({}, specie, { closestRecordDistance: closestRecord.distance });
      });
      return speciesWithClosestRecord
        .sort((a, b) => a.closestRecordDistance - b.closestRecordDistance);
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
