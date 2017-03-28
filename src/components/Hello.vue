<template>
  <div class="hello">
    <div v-if="!this.$store.state.records.length" class="intro">
      <h1>Welcome to Bio scan</h1>
      <p>Explore the recorded species nearby.
      You can set the size of the search area and download the results.
      Records are provided by the <a href="https://vba.dse.vic.gov.au/vba/">Victorian Biodiversity Atlas</a></p>
      <md-layout md-align="center">
        <md-button  :disabled="false" v-if="this.$store.state.token" @click.native="browse" id="browse-button" class="md-raised">
          <md-icon>place</md-icon>  
          Browse
        </md-button>
      </md-layout>
    </div>
    <recordTable v-else></recordTable>
    <specieDetail v-if="selectedSpecie" :specie="selectedSpecie"></specieDetail>

    <!-- <button style="background-color:red" @click="fetchToken" >Get Token</button> -->
    <!-- <button style="background-color:green" @click="fetchRecords" >Get Records</button> -->
    <!-- <button style="background-color:orange" @click="getPosition" >Get Position</button> -->
    <!-- </br> -->
    <!-- <span>filter : {{ this.$store.state.filter }}</span></br> -->
    <!-- <span>position : {{ position }}</span></br> -->
    <!-- <span>token : {{ token }}</span></br> -->
    <!-- <span>records : {{ records }}</span></br> -->
    <!-- <span>species : {{ species }}</span></br> -->
  </div>
</template>

<script>
import recordTable from './recordTable';
import specieDetail from './specieDetail';

export default {
  name: 'hello',
  components: {
    recordTable,
    specieDetail,
  },
  computed: {
    selectedSpecie() {
      console.log('___', this.$store.getters.selectedSpecieData);
      return this.$store.getters.selectedSpecieData;
    },

    records() {
      return this.$store.getters.records.length;
    },

    token() {
      return this.$store.state.token ? 'ready' : 'waiting...';
    },

    position() {
      return this.$store.state.position;
    },

    species() {
      return this.$store.getters.species;
    },
  },
  methods: {
    fetchToken() {
      this.$store.dispatch('fetchToken');
    },

    fetchRecords() {
      this.$store.dispatch('fetchRecordsByLocation');
    },

    getPosition() {
      this.$store.dispatch('getPosition');
    },

    browse() {
      // Toggle Progress bar
      this.$store.dispatch('switchProgress');
      this.$store.dispatch('getPosition')
        .then(() => this.$store.dispatch('fetchRecordsByLocation'))
        // .then(() => this.$store.dispatch('hydrateSpecies'))
        .then(() => this.$store.dispatch('switchProgress'));
    },
  },
  beforeMount() {
    this.fetchToken();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

:root .hello a {
  color: #3e3287;
}

.hello p {
  white-space: pre-line;
}

.intro {
  margin: 1rem;
  font-size: 1rem;
}

#browse-button{
  text-align: center;
  background-color: #00B2A9;
}

</style>
