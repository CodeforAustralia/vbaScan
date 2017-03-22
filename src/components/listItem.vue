<template>
  <md-list-item class="md-list-item">
    <md-avatar>
      <img :src="record.thumbnailUrl" v-if="record.thumbnailUrl">
      <img src="https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg" alt="emoji" class="emoji" v-else>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{record.commonNme}}</span>
      <span>{{record.scientificDisplayNme}}</span>
      <p>Total count : {{record.totalCountInt}}</p>
    </div>

    <md-button @click.native="toggleRightSidenav" :id="record.taxonId" class="md-icon-button md-list-action">
      <md-icon class="md-primary">info</md-icon>
    </md-button>

    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script>
export default {
  props: ['record'],
  methods: {
    toggleRightSidenav() {
      const taxonId = parseInt(event.currentTarget.id, 10);
      // this.$refs.rightSidenav.toggle();
      this.$emit('infoPanel', taxonId);
    },
  },
};
</script>

<style>
.md-list-item{
  background-color: white;
  /*padding-bottom: 5px;*/
  padding-top: 5px;
}
</style>
