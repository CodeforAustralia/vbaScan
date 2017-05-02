<template>
  <md-list class="list">
    <specieListItem v-for="(specie, index) in items"
      :commonName="specie.commonNme"
      :conservationStatus="specie.conservationStatus"
      :scientificName="specie.scientificDisplayNme"
      :taxonId="specie.taxonId" 
      :key="index">
    </specieListItem>
    <ul class="pagination">
      <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 2 || pageNumber == totalPages || pageNumber == 1">
        <md-button href="#" @click.native="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 2), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 2)}">{{ pageNumber }}</md-button>
      </li>
    </ul>
  </md-list>
</template>
<script>
import specieListItem from './specieListItem';

export default {
  data() {
    const data = { // eslint-disable-line no-unused-vars
      currentPage: 0,
      itemsPerPage: 10,
      resultCount: 0,
    };
    return data;
  },
  components: {
    specieListItem,
  },
  computed: {
    items() {
      switch (this.$store.state.filter) {
        case 'commonName':
          return this.paginate(this.byCommonName());
        case 'scientificName':
          return this.paginate(this.byScientificName());
        default:
          return this.paginate(this.byScientificName());
      }
    },
    totalPages() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
  },
  methods: {
    paginate(list) {
      this.resultCount = list.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1;
      }
      const index = this.currentPage * this.itemsPerPage;
      return list.slice(index, index + this.itemsPerPage);
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber;
      console.log(this.data);
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
    selectSpecie() {
      const taxonId = this.taxonId;
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

a {
  color: #999;
}
.current {
  color: red;
}
ul .pagination {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
}
.pagination li {
  display: inline;
  margin: 5px 5px;
}

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}
</style>
