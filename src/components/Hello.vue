<template>
  <div class="hello">
    <div v-if="!this.$store.state.species.length" class="intro">
    <template v-if="(!this.$store.state.species.length || !this.$store.state.records.length) && !this.$store.state.attemptSatus">
      <h1>Welcome to Bio scan</h1>
      <p>Explore nearby recording of species. </p>
      <p>Specie's records are provided by the <a href="https://vba.dse.vic.gov.au/vba/">Victorian Biodiversity Atlas</a>.
      Biodiversity knowledge is comming from : </p>
      <ul>
        <li><a href="https://museumvictoria.com.au">Museums Victoria</a></li>
        <li><a href="https://www.ala.org.au/">Atlas of Living Australia</a></li>
        <li><a href="https://www.rbg.vic.gov.au/">Royal Botanic Gardens Victoria</a></li>
      </ul>
      <p>
        This is a <a href="https://www.delwp.vic.gov.au">DELWP</a> and <a href="www.codeforaustralia.org/">Code for Australia</a> project.
      </p>
    </template>
    <template v-else-if ="isLoading">
      <p>Loading...</p>
    </template>
    <template v-else-if="this.$store.state.attemptSatus && (!this.$store.state.species.length || !this.$store.state.records.length)">
      <p>We couldn't find any records around you.
      Try with a broader search radius or move further away and search again.</p>
    </template>
      <md-layout md-align="center">
<!--         <md-button v-if="this.$store.state.attemptSatus < (Date.now() + 5000)" :disabled="true" id="browse-button" class="md-raised">
          <md-icon>place</md-icon>  
          Searching...
        </md-button> -->
        <md-button v-if="(!this.$store.state.species.length || !this.$store.state.records.length)" :disabled="!this.$store.state.token" @click.native="browse" id="browse-button" class="md-raised">
          <md-icon>place</md-icon>  
          Browse
        </md-button>
      </md-layout>
    </div>

    <transition name="component-fade" mode="out-in" >
      <component :is="currentComponent"></component>
    </transition>
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
  data() {
    return { // eslint-disable-line no-unused-vars
      now: Date.now(),
    };
  },

  computed: {
    isLoading() {
      const attempt = this.$store.state.attemptSatus;
      console.log(!((attempt + 5000) < this.now));
      return !((attempt + 5000) < this.now);
    },

    currentComponent() {
      if (this.$store.getters.selectedSpecieData) return 'specieDetail';
      else if (this.$store.getters.species.length) return 'recordTable';
      return null;
    },

    selectedSpecie() {
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
      // this.$store.dispatch('searchRecords');
      // this.$store.dispatch('fetchRecordsByLocation');
    },

    getPosition() {
      this.$store.dispatch('getPosition');
    },

    browse() {
      // Toggle Progress bar
      this.$store.dispatch('switchProgress');
      this.$store.dispatch('getPosition')
        .then(() => this.$store.dispatch('searchRecords'))
        // .then(() => this.$store.dispatch('fetchRecordsByLocation'))
        .then(() => this.$store.dispatch('switchProgress'))
        .then(() => this.$store.dispatch('attemptMade'));
    },
  },
  beforeMount() {
    this.fetchToken();
  },
  mounted() {
    const self = this;
    setInterval(() => {
      self.$data.now = Date.now();
    }, 1000);
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
/*  display: inline-block;
*/  margin: 0 10px;
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

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>
