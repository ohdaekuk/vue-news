<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="(NewsData, i) in this.$store.state.news" :key="i" class="post">
       
        <div class="points">{{ NewsData.points }}</div>

        
        <div>
          <p class="news-title">
            <a :href="NewsData.url">{{ NewsData.title }}</a>
          </p>
          <small class="link-text">
            by

            <router-link class="link-text" :to="`/user/${NewsData.user}`">
              {{ NewsData.user }}</router-link
            >
          </small>
        </div>
     
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
// import { fetchNewsList } from "../api/index.js";
// import axios from "axios";
export default {
  components: { ListItem },
};
</script>

<style></style>
