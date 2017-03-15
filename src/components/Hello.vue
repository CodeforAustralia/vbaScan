<template>
  <div class="hello">
    <button style="background-color:red" @click="fetchToken" >Get Token</button>
    <button style="background-color:green" @click="fetchRecords" >Get Records</button>
    <button style="background-color:orange" @click="getPosition" >Get Position</button>
    </br>
    <span>position : {{ position }}</span></br>
    <span>token : {{ token }}</span></br>
    <span>species : {{ species }}</span></br>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    species() {
      return this.$store.getters.species;
    },

    token() {
      return this.$store.state.token ? 'ready' : 'waiting...';
    },

    position() {
      return this.$store.state.position;
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

a {
  color: #42b983;
}
</style>
