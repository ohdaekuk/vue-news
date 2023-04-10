<template>
  <div>
    <!-- NewsView -->
    <div>
      <ul class="content-list">
        <li v-for="(items, i) in listItems" :key="i" class="post">
          <!-- 포인트 영역 -->
          <div class="points">{{ items.points || 0 }}</div>

          <!-- 기타 정보 영역 -->
          <div>
            <!-- askView title router-link 태그 -->
            <p class="content-title" v-if="thisPage === 'ask'">
              <router-link :to="`/item/${items.id}`">
                {{ items.title }}
              </router-link>
            </p>
            <!-- newsView, jobsView title a 태그 -->
            <p class="content-title" v-else>
              <a :href="items.url">{{ items.title }}</a>
            </p>
            <!-- jobsView domain  -->
            <small class="link_text" v-if="thisPage === 'jobs'">
              {{ items.time_ago }} by
              <small>
                <a :href="items.url"> {{ items.domain }}</a></small
              >
            </small>
            <!-- newsView, askView user -->
            <small class="link-text" v-else>
              {{ items.time_ago }} by
              <router-link class="link-text" :to="`/user/${items.user}`">
                {{ items.user }}
              </router-link>
            </small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisPage: "",
    };
  },
  computed: {
    listItems() {
      return this.$store.state.list;
      // this.thisPage = this.$route.name;

      // if (this.thisPage == "news") {
      //   return this.$store.state.news;
      // } else if (this.thisPage == "jobs") {
      //   return this.$store.state.jobs;
      // } else if (this.thisPage == "ask") {
      //   return this.$store.state.ask;
      // }
      // return "";
    },
  },

  // created() {
  //   this.thisPage = this.$route.name;

  //   let actionName = "";

  //   if (this.thisPage == "news") {
  //     actionName = "FETCH_NEWS";
  //   } else if (this.thisPage == "jobs") {
  //     actionName = "FETCH_JOBS";
  //   } else if (this.thisPage == "ask") {
  //     actionName = "FETCH_ASK";
  //   }

  //   this.$store.dispatch(actionName);
  // },
};
</script>

<style scoped>
.content-list {
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
.content-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
