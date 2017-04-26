<template>
  <md-sidenav class="md-right md-fixed" ref="rightSidenav">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Debugging</h3>
      </div>
    </md-toolbar>

    </br>
    </br>

    <label for="weight">Search radius : {{searchRadius}} m</label>
    <!-- <input type="range" id="weight" min="10" value="10" max="2000" step="100"> -->
    <!-- <input type="range"> -->
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
  computed: {
    searchRadius() {
      return this.$store.state.searchRadius;
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
