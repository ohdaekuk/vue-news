<template>
  <div>
    <p v-for="(NewsData, i) in this.$store.state.news" :key="i">
      <a :href="NewsData.url">{{ NewsData.title }}</a> &nbsp;
      <small
        >{{ NewsData.time_ago }} by

        <!-- user 클릭 시 이동 -->
        <!-- <router-link :to="'/user/' + NewsData.user">
          {{ NewsData.user }}</router-link
        > -->
        <router-link :to="`/user/${NewsData.user}`">
          {{ NewsData.user }}</router-link
        >
      </small>
    </p>
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
  },
};
</script>

<style></style>
