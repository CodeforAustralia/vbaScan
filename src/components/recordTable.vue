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
import gridListItem from './gridListItem';
import listFilter from './listFilter';
import specieList from './specieList';
import byDistanceList from './byDistanceList';

export default {
  components: {
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
  },

};
</script>

<style scoped>
.card-layout {
  margin-right: 4px;
}
</style>
