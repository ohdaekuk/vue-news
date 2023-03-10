<template>
  <div>
    <div v-for="(NewsData, i) in this.$store.state.news" :key="i">
      {{ i + 1 }} &nbsp; {{ NewsData.title }} <br /><br />
    </div>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";
// import axios from "axios";
export default {
  data() {
    return {
      // news: this.$store.state.news,
    };
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");

    // fetchNewsList()
    //   .then((response) => (this.news = response.data))
    //   .catch((error) => console.log(error));
    // var vm = this;
    // axios
    //   .get("https://api.hnpwa.com/v0/news/1.json")
    //   .then(function (response) {
    //     vm.news = response.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
