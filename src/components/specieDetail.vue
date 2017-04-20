<template>
  <div id="container">
  <div class="taxonomy">
    <md-button @click.native="close">
      <md-icon>arrow_back</md-icon>
    </md-button>
    <div class="names">
      <h1>{{specie.taxonomy.commonName}}</h1>
      <h2>{{specie.taxonomy.taxonName}}</h2>
    </div>
  </div>

    <imgSlider v-if="specie.media"></imgSlider>

    <div class="description">
    <template v-if="description">
      <h3>Description :</h3>
      <p>{{description}}</p>
    </template>
    </div>
    <template v-if="true">
      <md-list id="data-list">
        <md-list-item v-if="specie.habitat">
          <span>Habitat</span>
          <md-list-expand>
            <p>{{specie.habitat}}</p>
          </md-list-expand>
        </md-list-item>
        <md-list-item v-if="specie.biology">
          <span>Biology</span>
          <md-list-expand>
            <p>{{specie.biology}}</p>
          </md-list-expand>
        </md-list-item>
        <md-list-item v-if="specie.distribution">
          <span>Distribution</span>
          <md-list-expand>
            <p>{{specie.distribution}}</p>
          </md-list-expand>
        </md-list-item>
      </md-list>
    </template>
    <h3 class="margin-left">Observation : </h3>
    <recordList></recordList>
  </div>
</template>

<script>
import imgSlider from './imgSlider';
import recordList from './recordList';

export default {
  components: {
    imgSlider,
    recordList,
  },
  data() {
    const data = { // eslint-disable-line no-unused-vars
      specie: this.$store.getters.selectedSpecieData,
    };
    return data;
  },
  computed: {
    description() {
      console.log(this.specie.generalDescription);
      return this.specie.generalDescription;
    },
  },
  methods: {
    close() {
      console.log('closing details page');
      this.$store.dispatch('setSpecieDetail', null);
    },
  },
};
</script>

<style scoped>
#container {
  background-color: white;
}

.images {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30vh;
}

.images img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  overflow: auto;
}

.nav-button {
  display: flex;
  max-width: 10vw;
  color: white;
  justify-content: center;
  background-color: rgba(128,128,128,.4);
}

.taxonomy {
  display: flex;
  flex-direction: row;
}

.description {
  margin: 1rem;
}
.margin-left {
  margin-left: 1rem;
}

</style>

<style>
#data-list {
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0;
}
#data-list .dropdown-title i {
  color: red;
}

#data-list .md-list-item .md-button-ghost {
  background: none;
}

#data-list span {
  color: #201547;
  font-weight: 500;
}

#data-list i {
  color: #00b7bd;
}
#data-list .md-active span {
  color: white;
  font-weight: 500;
}

#data-list .md-active i {
  color: white;
  font-weight: 500;
}
#data-list .md-active .md-list-item-container {
  background-color: #00b7bd;
}

#data-list .md-list-item-expand:after {
  height: 0;
}

</style>
