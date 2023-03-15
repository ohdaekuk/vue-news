<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs_list">
      <li v-for="(JobsData, i) in this.$store.state.jobs" :key="i" class="post">
        <div class="number">{{ i + 1 }}</div>

        <div>
          <p class="jobs_title">
            <a :href="JobsData.url">{{ JobsData.title }}</a>
          </p>
          <small class="link_text">
            <small>by {{ JobsData.domain }}</small>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
// import { fetchJobsList } from "../api/index.js";
export default {
  components: { ListItem },

  created() {
    // this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
