<template>
  <div>
    <div v-for="(NewsData, i) in news" :key="i">
      {{ i + 1 }} &nbsp; {{ NewsData.title }} <br /><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then((response) => (this.news = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
