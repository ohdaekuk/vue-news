<template>
  <div>
    <p v-for="(JobsData, i) in this.$store.state.jobs" :key="i">
      <a :href="JobsData.url">{{ JobsData.title }}</a> &nbsp;
      <small>{{ JobsData.time_ago }} by </small>
      <small>{{ JobsData.domain }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      // jobs: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
