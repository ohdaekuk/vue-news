<template>
  <div>
    <p v-for="(AskData, i) in fetchedAsk" :key="i">
      <router-link :to="'/item/' + AskData.id">
        {{ AskData.title }}
      </router-link>
      <small>{{ AskData.time_ago }} by {{ AskData.user }}</small>
    </p>
  </div>
</template>

<script>
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
