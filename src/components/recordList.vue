<!-- date , methods, count , name, project Id, accuracy -->
<template>
  <div>
    <md-list class="list">
      <md-whiteframe v-for="record in records" :record="record">
      <div class="row">
          <p>Observer :</p>
          <p>{{record.observerFullName}}</p>
      </div>
      <div class="row">
        <p>Method :</p>
        <p>{{ record.samplingMethodCde}}</p>
      </div>
      <div class="row">
        <p>Date :</p>
        <p>{{new Date(record.surveyStartSdt).toDateString()}}</p>
      </div>
      <div v-if="record.totalCountInt" class="row">
        <p>Count :</p>
        <p>{{record.totalCountInt}}</p>
      </div>
      <div class="row">
        <p>Accuracy :</p>
        <p>{{record.latLongAccuracyddNum}} m</p>
      </div>
      <div class="row">
        <p>Project Id :</p>
        <p>{{record.projectId}}</p>
      </div>
      </md-whiteframe>
    </md-list>
  </div>
</template>
<script>
import listItem from './listItem';

export default {
  components: {
    listItem,
  },
  computed: {
    records() {
      const id = this.$store.state.selectedSpecie;
      const records = this.$store.getters.records.filter(record => record.taxonId === id);
      return records;
    },
  },
};
</script>

<style scoped>
.list{
  padding-top: 0;
  padding-bottom: 0;
}
.md-theme-default.md-card {
  background-color: white;
}
.md-list-item {
  border-bottom: 1px solid #e0e0e0;
}
.md-whiteframe {
  background-color: white;
  padding: .5rem;
}
.row {
  display: flex;
  justify-content: space-between;

}
</style>
