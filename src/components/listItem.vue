<template>
  <md-list-item class="md-list-item">
    <md-avatar>
      <img :src="thumbnail" v-if="thumbnail">
      <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji" v-else>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{record.commonNme}}</span>
      <span>{{record.scientificDisplayNme}}</span>
      <p> {{ obs }} Observation{{obs > 1 ? 's':''}} | Last from {{lastObs}}</p>
      <!-- <p v-if="record.totalCountInt">Total count : {{record.totalCountInt}}</p> -->
      <!-- <p v-else>Uncounted</p> -->
    </div>
    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script>
export default {
  props: ['record'],
  methods: {
    toggleRightSidenav() {
      const taxonId = parseInt(event.currentTarget.id, 10);
      this.$emit('infoPanel', taxonId);
    },
  },
  computed: {
    thumbnail() {
      const media = this.$store.getters.specieMedia(this.record.taxonId);
      if (!media) return false;
      console.log(this.record.commonNme, media, media.length);
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      if (Object.prototype.hasOwnProperty.call(media[0], 'thumbnail')) return media[0].thumbnail.uri;
      return false;
    },
    obs() {
      const id = this.record.taxonId;
      const obs = this.$store.getters.records.reduce((acc, record) => {
        if (record.taxonId === id) return acc + 1;
        return acc;
      }, 0);
      return obs;
    },
    lastObs() {
      const id = this.record.taxonId;
      const obs = this.$store.getters.records.reduce((acc, record) => {
        if (record.taxonId === id) acc.push(record);
        return acc;
      }, []);
      console.log(obs);
      const sorted = obs.sort((a, b) => {
        return b.surveyStartSdt - a.surveyStartSdt;
      });
      console.log('sorted', sorted);
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
  width: auto;
  height: auto;
}
</style>
