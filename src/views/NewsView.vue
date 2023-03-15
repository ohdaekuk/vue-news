<template>
  <div>
<<<<<<< HEAD
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
=======
    <ListItem></ListItem>
>>>>>>> 605ce67 (ListItem.vue 만들어 리팩토링 230315)
  </div>
</template>

<script>
<<<<<<< HEAD
import ListItem from "@/components/ListItem.vue";
// import { fetchNewsList } from "../api/index.js";
// import axios from "axios";
export default {
  components: { ListItem },
=======
// ListItem.vue에 NewsView 내용을 넣어 import
import ListItem from "../components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
>>>>>>> 605ce67 (ListItem.vue 만들어 리팩토링 230315)
};
</script>

<style></style>
