<template>
  <md-list-item class="md-list-item">
    <md-avatar>
      <img :src="thumbnail" v-if="thumbnail">
      <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji" v-else>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{record.commonNme}}</span>
      <span>{{record.scientificDisplayNme}}</span>
      <p v-if="record.totalCountInt">Total count : {{record.totalCountInt}}</p>
      <p v-else>Uncounted</p>
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
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      return false;
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
