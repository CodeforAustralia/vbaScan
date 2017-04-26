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
    <md-progress v-if="this.$store.state.progress" class="md-accent" md-indeterminate></md-progress>
    <hello></hello>
    <!-- sideNav -->
    <sidePanel ref="rightSidenav"></sidePanel>
  </div>
</template>

<script>
import Hello from './components/Hello';
import sidePanel from './components/sidePanel';

export default {
  name: 'app',
  components: {
    Hello,
    sidePanel,
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
      this.$refs.rightSidenav.toggleRightSidenav();
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
  color: #2c3e50;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
}

.main-toolbar {
  justify-content: space-between;
}

:root .md-theme-default.md-toolbar {
  background-color: #201647;
}

.md-toolbar.main-toolbar.md-theme-default::before {
  border-color: transparent transparent #00b7bd transparent;
  border-style: solid;
  border-width: 0 12.5rem 26.25rem 12.5rem;
  content: '';
  height: 100%;
  position: absolute;
  right: -19.625rem;
  top: -22.25rem;
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
