<template>
  <md-whiteframe md-elevation="1" class="card">
    <div class="card-content" v-bind:style="backgroundImage">
      <!-- <img :src="thumbnail" v-if="thumbnail"> -->
     <!--  <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji" v-else> -->
    <!-- </div> -->
    <!-- <div class="content"> -->
      <!-- <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji"> -->
      <p class="specie-name truncate">{{record.commonNme}}</p>
      <!-- <md-icon class="md-primary" @click.native="toggleRightSidenavCard" :id="record.taxonId">info</md-icon> -->
    </div>
  </md-whiteframe>
</template>

<script>
export default {
  props: ['record'],
  methods: {
  },
  computed: {
    thumbnail() {
      const media = this.$store.getters.museumSpecieMedia(this.record.taxonId);
      if (!media) return false;
      if (Object.prototype.hasOwnProperty.call(media[0], 'small')) return media[0].small.uri;
      return false;
    },
    backgroundImage() {
      const style = {
        'background-image': this.thumbnail ? `url(${this.thumbnail})` : 'url(https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg)',
      };
      console.log(style);
      return style;
    },
  },
};
</script>
<style scoped>
.content {
  height: 44px;
  display: flex;
  font-size: 1em;
}
.card {
  max-width: 48%;
  margin: 0 0 4px 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  flex-grow: 1;
}

.card-content {
  background-position-y: top;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: flex-end;
  height: 20vh;
  display: flex;
  align-records: center;
  justify-content: center;
}
.media img {
  min-height: 50%;
  min-width: 50%;
  max-width: 100%;
  max-height: 100%;
}

.emoji{
  margin: 8px;
  width: 24px;
  height: 24px;
}

.truncate {
  /*width: 34vw;*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.specie-name{
  background-color: rgba(127, 133, 137, 0.7);
  font-size: 1rem;
  color: white;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0.4rem 1rem 0.4rem 1rem;
}
</style>
