<template>
  <div>
    <listFilter></listFilter>
    <md-list class="list" v-if="this.$store.state.listView && this.$store.getters.records.length">
        <listItem v-for="item in items" :record="item" 
                  @click.native="selectSpecie(item.taxonId)"></listItem>
    </md-list>
    <md-layout v-else class="card-layout">
      <gridListItem v-for="item in items" :record="item"></gridListItem>
    </md-layout>
    <p v-id="this.$store.getters.species.length > 10">{{this.$store.getters.species.length}} items available, Only showing first 10</p>
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
        case 'species':
          return this.$store.getters.species.slice(0, 100);
        default:
          return this.$store.getters.records.slice(0, 10);
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
.list{
  padding-top: 0;
  padding-bottom: 0;
}
.card-layout {
  margin-right: 4px;
}
</style>
