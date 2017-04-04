<template>
  <div id="app">
    <md-whiteframe md-elevation="1" md-theme="primary" class="main-toolbar">
      <md-toolbar class="main-toolbar">
        <img id="logo" src="https://www.wildlife.vic.gov.au/__data/assets/git_bridge/0015/177/deploy/mysource_files/logo-copy.svg" alt="DELWP logo">
        <md-layout class="toolbar-icons">
          <md-button v-if="this.$store.state.records.length" class="md-icon-button" @click.native="switchView()">
          <div v-if="!this.$store.state.selectedSpecie">
            <md-icon v-if="listView">view_module</md-icon>
            <md-icon v-else>view_list</md-icon>
          </div>
          </md-button>
          <md-button @click.native="toggleRightSidenav">
            <md-icon id="menu-icon" >menu</md-icon>
          </md-button>
        </md-layout>
      </md-toolbar>
    </md-whiteframe>
    <md-progress v-if="this.$store.state.progress"class="md-accent" md-indeterminate></md-progress>
    <hello></hello>
    <!-- sideNav -->
    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Debugging</h3>
      </div>
    </md-toolbar>
    </br></br>
        <label for="weight">Range</label>
        <input type="range" id="weight" min="10" value="10" max="2000" step="100">
        </br>
        <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
        </md-sidenav>
  </md-sidenav>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  computed: {
    listView() {
      return this.$store.state.listView;
    },
  },
  methods: {
    switchView() {
      this.$store.dispatch('switchView');
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.main-toolbar {
  /*position: relative;*/
  /*z-index: 10;*/
  justify-content: space-between;
}
.md-theme-default.md-toolbar {
background: linear-gradient(120deg, #201547 0%,#201547 74%,#00b2a9 70%,#00b2a9 80%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

#logo{
  height: 2.125rem;
}

.toolbar-icons {
  justify-content: flex-end;
  align-items: center;
}
.md-button{
  min-width: 0;
}
#menu-icon {
  color: #201547;
}
</style>
