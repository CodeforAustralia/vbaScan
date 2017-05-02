<template>
  <md-list-item class="md-list-item"
    @click.native="selectSpecie(taxonId)">
    <md-avatar>
      <img :src="thumbnail" v-if="thumbnail">
      <img src="https://raw.githubusercontent.com/Ranks/emojione/2.2.7/assets/png_128x128/1f43e.png" alt="emoji" class="emoji" v-else>
    </md-avatar>

    <div class="md-list-text-container">
    <div>
      <div class="taxonomy">
        <div class="top-row">
          <p>{{commonName}}</p>
          <p v-if="conservationStatus" class="status">{{conservationStatus}}</p>
        </div>
        <p>{{scientificName}}</p>
      </div>
    </div>
      <div class="observation">
        <p>{{ obs }} Observation{{obs > 1 ? 's':''}}<p>
        <p>Last from {{lastObs}}</p>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script>
export default {
  props: {
    commonName: {
      type: String,
      default() { return ''; },
    },
    conservationStatus: {
      type: String,
      default() { return false; },
    },
    scientificName: {
      type: String,
      default() { return ''; },
    },
    taxonId: {
      type: Number,
      default() { return undefined; },
    },
  },
  methods: {
    selectSpecie() {
      const taxonId = this.taxonId;
      this.$store.dispatch('setSpecieDetail', taxonId);
    },
  },
  computed: {
    thumbnail() {
      const media = this.$store.getters.specieMedia(this.taxonId);
      if (!media) return false;
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      if (Object.prototype.hasOwnProperty.call(media[0], 'thumbnail')) return media[0].thumbnail.uri;
      return false;
    },
    obs() {
      const id = this.taxonId;
      const obs = this.$store.getters.records.reduce((acc, record) => {
        if (record.taxonId === id) return acc + 1;
        return acc;
      }, 0);
      return obs;
    },
    lastObs() {
      const id = this.taxonId;
      const obs = this.$store.getters.records.reduce((acc, record) => {
        if (record.taxonId === id) acc.push(record);
        return acc;
      }, []);
      const sorted = obs.sort((a, b) => b.surveyStartSdt - a.surveyStartSdt);
      return new Date(sorted[0].surveyStartSdt).getFullYear();
    },
  },
};
</script>

<style>
.md-list-item {
  background-color: white;
  padding-top: 5px;
}

.md-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0, 0.1);
}

.md-avatar img {
  /*width: 100%;*/
  /*height: 100%;*/
  object-fit: cover;
}
.observation{
  display: flex;
  justify-content: space-between;
}
.observation p {
  margin: 0;
}

.title {
/*  display: flex;
  justify-content: space-between;*/
}
.top-row {
  display: flex;
  justify-content: space-between;
}
.taxonomy {
  display: flex;
  flex-direction: column;
}

.taxonomy p {
  overflow: auto;
  text-overflow: ellipsis;
}

.status {
  background-color: #f8e81c;
  padding: 0 5px 0 5px;
  border-radius: 5px;
  margin: 0;
}

p {
  margin: 0;
}
/* Fix ghosting on hover bug */
.md-button:hover:not([disabled]):not(.md-raised) {
  background-color: transparent;
}
</style>
