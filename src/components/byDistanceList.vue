<template>
  <md-list class="list">
    <template v-for="(range, index) in ranges">
      <p class="distance-label">At least {{range}}m away</p>
      <specieListItem v-for="specie in speciesInRange(range, ranges[index + 1])"
        :commonName="specie.commonNme"
        :conservationStatus="specie.conservationStatus"
        :scientificName="specie.scientificDisplayNme"
        :taxonId="specie.taxonId">
      </specieListItem>
    </template>
  </md-list>
</template>

<script>
import specieListItem from './specieListItem';

export default {
  components: {
    specieListItem,
  },
  computed: {
    ranges() {
      const speciesDistance = this.byDistance()
        .reduce((accu, specie) => {
          // convert from Km to m and round value;
          const distance = Math.round(specie.closestRecordDistance * 1000);
          // check if value already in array;
          if (!accu.some(arrVal => distance === arrVal)) {
            return [...accu, distance];
          }
          return accu;
        }, []);
      const min = speciesDistance[0];
      const max = speciesDistance[speciesDistance.length - 1];
      const steps = Math.round(max - min) / 5;
      const ranges = [];

      // break if not enough distance value available to build range.
      if (steps <= 0) {
        const step = min + (0 - (min % 10));
        return [step];
      }
      // build ranges value
      for (let i = min; i <= max; i += steps) {
        // round to lower multiple of 10. eg: 2348 -> 2340
        const roundedDown = i + (0 - (i % 10));
        ranges.push(roundedDown);
      }
      // Check if species present in ranges
      const validRanges = ranges.filter((range, index, array) => {
        const maxRange = array[index + 1];
        // check if the a record is present between range and range + 1
        const inRange = speciesDistance.some(dist => dist >= range && dist < maxRange);
        return inRange;
      });
      console.log(
        `validRanges : ${validRanges}
        min : ${min}
        max : ${max}
        steps : ${steps}`);
      return validRanges;
    },
  },
  methods: {
    byDistance() {
      const species = this.$store.getters.species;
      const speciesWithClosestRecord = species.map((specie) => {
        const taxonId = specie.taxonId;
        const records = this.$store.getters.records.filter(record => record.taxonId === taxonId);
        const closestRecord = records.sort((a, b) => a.distance - b.distance)[0];
        return Object.assign({}, specie, { closestRecordDistance: closestRecord.distance });
      });
      return speciesWithClosestRecord
        .sort((a, b) => a.closestRecordDistance - b.closestRecordDistance);
    },
    speciesInRange(min, max) {
      const inRange = this.byDistance()
        .filter((specie) => {
          const distance = Math.round(specie.closestRecordDistance * 1000);
          if (max) return distance >= min && distance < max;
          return distance >= min;
        });
      console.log(min, max, inRange);
      return inRange;
    },
  },
};
</script>

<style scoped>

.list{
  padding-top: 0;
  padding-bottom: 0;
}

.distance-label {
  margin: 1rem 0 .8rem 1.2rem;
}
</style>
