<template>
  <div>
    <listFilter></listFilter>
    <md-list class="list" v-if="this.$store.state.listView && this.$store.getters.records.length">
        <listItem v-for="item in items" :record="item" :key="item.taxonId"></listItem>
    </md-list>
    <md-layout v-else class="card-layout">
      <gridListItem v-for="item in items" :record="item" :key="item.taxonId"></gridListItem>
    </md-layout>
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
          return this.$store.getters.species;
        case 'distance':
          return this.$store.getters.distance;
        case 'count':
          return this.$store.getters.count;
        default:
          return this.$store.getters.records;
      }
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
