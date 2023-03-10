<template>
  <div>
    <div v-for="(AskData, i) in fetchedAsk" :key="i">
      {{ i + 1 }} &nbsp; {{ AskData.title }} <br />
      <br />
    </div>

    <br /><br />
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
    //   return this.$store.state;
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
