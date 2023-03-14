<template>
  <div>
    <ul class="jobs_list">
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
    </ul>
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

<style scoped>
.jobs_list {
  margin: 0;
  padding: 0;
}

.jobs_title {
  margin: 0;
}
.link_text {
  color: #828282;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.number {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
</style>
