<template>
<md-layout class="listFilter">
  <md-layout id="itemType">
    <p>{{itemType}}</p>
  </md-layout>
  <md-layout md-align="end">
  <div class="filterSelector">
    <md-input-container>
      <label for="filter">Sort by…</label>
      <md-select name="filter" id="filter" v-model="filter">
      <div id="dropdown-options">
        <md-option value="commonName">Common name</md-option>
        <md-option value="scientificName">Scientific name</md-option>
        <md-option value="flora">Flora</md-option>
        <md-option value="fauna">Fauna</md-option>
        <md-option value="distance">Distance</md-option>        
      </div>
      </md-select>
    </md-input-container>
  </div>
  </md-layout>
</md-layout>
</template>

<script>
// import listItem from './listItem';

export default {
  data() {
    const data = { // eslint-disable-line no-unused-vars
      // selectedFilter: '',
      filter: '',
    };
    return data;
  },
  components: {
    // listItem,
  },
  computed: {
    itemType() {
      switch (this.filter) {
        case 'species':
          return '↑ Species';
        case 'distance':
          return '↑ Distance';
        case 'count':
          return '↓ Count';
        default:
          return '↑ Species';
      }
    },
  },
  watch: {
    filter: function updateFilter(filter) {
      console.log(`filter changed to ${filter}`);
      this.$store.dispatch('updateFilter', filter);
    },
  },
};
</script>


<style scoped>
.listFilter{
  margin: 16px 0 0 1rem;
}

</style>

<style>
#dropdown-options .md-option{
  padding-top: 0;
}

.filterSelector{
  margin-right: 1rem;
}

.dropdown p {
  padding-left: 0.5rem; 
}

.menu-item {
  padding-left: 0.5rem;
}

:root .md-theme-default .md-menu-content .md-list{
  background-color: white;
}

.md-input-container {
  margin: 4px 0 4px;
}
.md-input-container:after {
  display: none;
}

#itemType{
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0.8rem;
}
#itemType p {
  margin: 0;
}


</style>
