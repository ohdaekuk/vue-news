<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask_list">
      <li v-for="(AskData, i) in fetchedAsk" :key="i" class="post">
        <div class="points">
          {{ AskData.points }}
        </div>

        <div>
          <p class="ask_title">
            <router-link :to="`/item/${AskData.id}`">
              {{ AskData.title }}
            </router-link>
          </p>
          <small class="link_text">{{ AskData.user }}</small>
        </div>
      </li>
    </ul>
    <!-- 
     
      <small>{{ AskData.time_ago }} by {{ AskData.user }}</small>
     -->
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
// import { fetchAskList } from "../api/index.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // ask: [],
    };
  },
  computed: {
    // 3.
    // 왼쪽 변수 오른쪽 store 안에 getters

    // ...mapGetters({
    //   askItems: "fetchedAsk",
    // }),

    // 배열로 넣을 수 있음
    ...mapGetters(["fetchedAsk"]), // fetchedAsk를 바인딩 가능

    // 2.
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // 1.
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // fetchAskList()
    //   .then((response) => (this.ask = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
