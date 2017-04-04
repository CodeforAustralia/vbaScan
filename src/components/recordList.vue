<!-- date , methods, count , name, project Id, accuracy -->
<template>
  <div>
<!--     <md-card v-for="record in records" :record="record" >
      <md-card-content>
        <p>Observer : {{record.observerFullName}}</p>
        <p>Method : {{ record.samplingMethodCde}}</p>
        <p>Date : {{new Date(record.surveyStartSdt).toDateString()}}</p>
        <p>Count : {{record.totalCountInt}}</p>
        <p>Accuracy: {{record.latLongAccuracyddNum}} m</p>
        <p>Project Id: {{record.projectId}}</p>
      </md-card-content>
    </md-card> -->
    <md-list class="list">
      <md-list-item v-for="record in records" :record="record"  class="md-list-item">
        <div class="md-list-text-container">
          <span>Observer : {{record.observerFullName}}</span>
          <span>Method : {{ record.samplingMethodCde}}</span>
          <span>Date : {{new Date(record.surveyStartSdt).toDateString()}}</span>
          <span v-if="record.totalCountInt">Count : {{record.totalCountInt}}</span>
          <span>Accuracy: {{record.latLongAccuracyddNum}} m</span>
          <span>Project Id: {{record.projectId}}</span>
        </div>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
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
</style>
