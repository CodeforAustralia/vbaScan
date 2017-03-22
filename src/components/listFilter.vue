<template>
<md-layout class="listFilter">
  <md-layout>
    <p>{{itemType}}</p>
  </md-layout>
  <md-layout md-align="end">
  <md-menu md-align-trigger>
    <md-button md-menu-trigger>{{menuButton}}</md-button>
    <md-menu-content>
    <div class="dropdown">
      <p>Sort by…</p>
      <div class="menu-item">
      <md-menu-item @click.native="setFilter('records')" >Records</md-menu-item>
      <md-menu-item @click.native="setFilter('species')" >Species</md-menu-item>
      <md-menu-item @click.native="setFilter('distance')" >Distance</md-menu-item>
      <md-menu-item @click.native="setFilter('count')" >Count</md-menu-item>
      </div>
    </div>
    </md-menu-content>
  </md-menu>
  </md-layout>
</md-layout>
</template>

<script>
import listItem from './listItem';

export default {
  data() {
    const data = { // eslint-disable-line no-unused-vars
      selectedFilter: '',
    };
    return data;
  },
  components: {
    listItem,
  },
  computed: {
    itemType() {
      const filter = this.$store.state.filter;
      if (filter === 'species' || filter === 'count') return 'Species';
      return 'Records';
    },
    menuButton() {
      switch (this.$store.state.filter) {
        case 'species':
          return '↑ Species';
        case 'distance':
          return '↑ Distance';
        case 'count':
          return '↓ Count';
        default:
          return '↑ Records';
      }
    },
  },
  methods: {
    setFilter(filter) {
      console.log(filter);
      this.$store.dispatch('updateFilter', filter);
    },
  },
};
</script>

<style >
.listFilter{
  margin: 16px 0 0 20px;
}

.dropdown {
  /*background-color: white;*/
}

.dropdown p {
  padding-left: 0.5rem; 
}

.menu-item {
  padding-left: 0.5rem;
}
.md-theme-default.md-list{
  background-color: white !important;
}


</style>
