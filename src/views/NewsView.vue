<template>
  <div>
    <ul class="news-list">
      <li v-for="(NewsData, i) in this.$store.state.news" :key="i" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ NewsData.points }}</div>

        <!-- 기타 정보 영역 -->
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
        <!-- <a :href="NewsData.url">{{ NewsData.title }}</a> &nbsp;
        <small
          >{{ NewsData.time_ago }} by

          <router-link :to="`/user/${NewsData.user}`">
            {{ NewsData.user }}</router-link
          >
        </small> -->
      </li>
    </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;

  /* 세로 중앙정렬 */
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
