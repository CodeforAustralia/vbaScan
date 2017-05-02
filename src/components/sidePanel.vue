<template>
  <md-sidenav class="md-right md-fixed" ref="rightSidenav">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Settings</h3>
      </div>
    </md-toolbar>

    </br>
    </br>
    <form action="">
      <label for="weight">Search radius : {{searchRadius}} m</label>
      <input type="range" id="weight" min="50" v-model="searchRadius" max="1500" step="50">  
    </form>
    <p>Location : </p>
    <p>Latitude : {{position.lat}}</p>
    <p>Longitude : {{position.long}}</p>
    <p>Record found at location : {{numberOfRecord}}</p>
    </br>
    <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
  </md-sidenav>
</template>

<script>
export default {
  name: 'sidePanel',
  data() {
    const data = { // eslint-disable-line no-unused-vars
      radius: 251,
    };
    return data;
  },
  computed: {
    searchRadius: {
      get() { return this.$store.state.searchRadius; },
      set(value) {
        this.$store.commit('SET_RADIUS', value);
      },
    },
    position() {
      return {
        lat: this.$store.state.position.lat,
        long: this.$store.state.position.long,
      };
    },
    numberOfRecord() {
      return this.$store.state.records.length;
    },
  },
  methods: {
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
  },
};
</script>

<style scoped>
.md-sidenav {
  z-index: 10;
  position: fixed !important;
}
</style>
