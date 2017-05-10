<template>
  <div>
    <md-list class="list" v-if="this.$store.state.listView">
    <template v-for="specie in items">      
      <specieListItem
        :commonName="specie.commonNme"
        :conservationStatus="specie.conservationStatus"
        :scientificName="specie.scientificDisplayNme"
        :taxonId="specie.taxonId" 
        :key="specie.scientificDisplayNme">
      </specieListItem>
    </template>
    </md-list>
    <div class="gridview" v-else>
      <gridListItem v-for="specie in items"
        :commonName="specie.commonNme"
        :scientificName="specie.scientificDisplayNme"
        :taxonId="specie.taxonId"
        :key="specie.scientificDisplayNme">
      </gridListItem>
    </div>
    <ul class="pagination">
      <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 2 || pageNumber == totalPages || pageNumber == 1">
        <md-button href="#" @click.native="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 2), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 2)}">{{ pageNumber }}</md-button>
      </li>
    </ul>
  </div>
</template>
<script>
import specieListItem from './specieListItem';
import gridListItem from './gridListItem';

export default {
  data() {
    const data = { // eslint-disable-line no-unused-vars
      currentPage: 1,
      itemsPerPage: 8,
      resultCount: 0,
    };
    return data;
  },
  components: {
    specieListItem,
    gridListItem,
  },
  computed: {
    species() {
      return this.$store.getters.species;
    },
    items() {
      switch (this.$store.state.filter) {
        case 'commonName':
          return this.paginate(this.byCommonName());
        case 'scientificName':
          return this.paginate(this.byScientificName());
        case 'distance':
          return this.paginate(this.byDistance());
        case 'flora':
          return this.paginate(this.byFlora());
        case 'fauna':
          return this.paginate(this.byFauna());
        default:
          return this.paginate(this.byScientificName());
      }
    },
    totalPages() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    // ranges() {
    //   const speciesDistance = this.byDistance()
    //     .reduce((accu, specie) => {
    //       // convert from Km to m and round value;
    //       const distance = Math.round(specie.closestRecordDistance * 1000);
    //       // check if value already in array;
    //       if (!accu.some(arrVal => distance === arrVal)) {
    //         return [...accu, distance];
    //       }
    //       return accu;
    //     }, []);
    //   const min = speciesDistance[0];
    //   const max = speciesDistance[speciesDistance.length - 1];
    //   const steps = Math.round(max - min) / 5;
    //   const ranges = [];

    //   // break if not enough distance value available to build range.
    //   if (steps <= 0) {
    //     const step = min + (0 - (min % 10));
    //     return [step];
    //   }
    //   // build ranges value
    //   for (let i = min; i <= max; i += steps) {
    //     // round to lower multiple of 10. eg: 2348 -> 2340
    //     const roundedDown = i + (0 - (i % 10));
    //     ranges.push(roundedDown);
    //   }
    //   // Check if species present in ranges
    //   const validRanges = ranges.filter((range, index, array) => {
    //     const maxRange = array[index + 1];
    //     // check if the a record is present between range and range + 1
    //     const inRange = speciesDistance.some(dist => dist >= range && dist < maxRange);
    //     return inRange;
    //   });
    //   console.log(
    //     `validRanges : ${validRanges}
    //     min distance : ${min}
    //     max distance : ${max}
    //     steps : ${steps}`);
    //   return validRanges;
    // },
  },
  methods: {
    paginate(list) {
      console.log('paginate called');
      if (list.length < this.itemsPerPage) {
        return list;
      }
      this.resultCount = list.length;
      // if (this.currentPage >= this.totalPages) {
      //   this.currentPage = this.totalPages - 1;
      // }
      const index = (this.currentPage - 1) * this.itemsPerPage;
      const paginatedList = list.slice(index, index + this.itemsPerPage);
      // hydrate the specie data for the page;
      paginatedList.forEach(specie => this.$store.dispatch('hydrateSpecie', specie.taxonId));
      return paginatedList;
    },
    setPage(pageNumber) {
      console.log(`current page ${this.currentPage} | pageNumber ${pageNumber}`);
      this.currentPage = pageNumber;
      console.log(this.currentPage);
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
    byFlora() {
      const species = this.$store.getters.species;
      return species.filter(specie => specie.primaryCd === 'Flora');
    },
    byFauna() {
      const species = this.$store.getters.species;
      // everything but flora
      return species.filter(specie => specie.primaryCd !== 'Flora');
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
    // speciesInRange(min, max) {
    //   const inRange = this.byDistance()
    //     .filter((specie) => {
    //       const distance = Math.round(specie.closestRecordDistance * 1000);
    //       if (max) return distance >= min && distance < max;
    //       return distance >= min;
    //     });
    //   console.log(min, max, inRange);
    //   return inRange;
    // },
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

.pagination {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
}
.pagination li {
  margin: 5px 5px;
}

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}

.gridview {
  display: flex;
  flex-wrap: wrap;
}
</style>
