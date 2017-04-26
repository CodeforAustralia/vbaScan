<template>
  <div>
    <md-list class="list">
      <recordListItem v-for="record in records"
        :observerName="record.observerFullName"
        :method="record.samplingMethodCde"
        :startDate="record.surveyStartSdt"
        :count="record.totalCountInt"
        :accuracy="record.latLongAccuracyddNum"
        :projectId="record.projectId"
        :distance="record.distance">
      </recordListItem>
    </md-list>
  </div>
</template>
<script>
import recordListItem from './recordListItem';

export default {
  components: {
    recordListItem,
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
  padding: 0.5rem 1rem 0.5rem 1rem;
}
.row {
  display: flex;
  justify-content: space-between;

}
</style>
