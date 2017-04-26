<template>
  <md-whiteframe>
    <div class="row">
      <p>Observer :</p>
      <p>{{observerName}}</p>
    </div>
    <div class="row">
      <p>Method :</p>
      <p>{{method}}</p>
    </div>
    <div class="row">
      <p>Date :</p>
      <p>{{new Date(startDate).toDateString()}}</p>
    </div>
    <div v-if="count" class="row">
      <p>Count :</p>
      <p>{{count}}</p>
    </div>
    <div class="row">
      <p>Accuracy :</p>
      <p>{{accuracy}} m</p>
    </div>
    <div class="row">
      <p>Project Id :</p>
      <p>{{projectId}}</p>
    </div>
    <div class="row">
      <p>Distance :</p>
      <p>{{(distance * 1000).toFixed()}} m</p>
    </div>
  </md-whiteframe>
</template>

<script>
export default {
  props: {
    observerName: {
      type: String,
      default() { return 'John Doe'; },
    },
    method: {
      type: String,
      default() { return 'Seen'; },
    },
    startDate: {
      type: Number,
      default() { return 0; },
    },
    count: {
      type: Number,
      default() { return 0; },
    },
    accuracy: {
      type: Number,
      default() { return 10; },
    },
    projectId: {
      type: Number,
      default() { return 1234; },
    },
    distance: {
      type: Number,
      default() { return 0.4567; },
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.md-theme-default.md-card {
  background-color: white;
}
.md-list-item {
  border-bottom: 1px solid #e0e0e0;
}
.md-whiteframe {
  background-color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
.row {
  display: flex;
  justify-content: space-between;
}
</style>
