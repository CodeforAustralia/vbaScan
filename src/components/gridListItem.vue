<template>
  <md-whiteframe md-elevation="1" class="card">
    <div class="media">
      <img :src="item.thumbnailUrl" v-if="item.thumbnailUrl">
      <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji" v-else>
    </div>
    <div class="content">
      <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji">
      <p class="truncate">{{item.commonNme}}</p>
      <md-icon class="md-primary" @click.native="toggleRightSidenavCard" :id="item.taxonId">info</md-icon>
    </div>
  </md-whiteframe>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    // toggleRightSidenav() {
    //   const taxonId = parseInt(event.currentTarget.id, 10);
    //   // this.$refs.rightSidenav.toggle();
    //   this.$emit('infoPanel', taxonId);
    // },
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

.media {
  height: 20vh;
  display: flex;
  align-items: center;
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
  width: 34vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
