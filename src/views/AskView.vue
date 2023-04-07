<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
// import { fetchAskList } from "../api/index.js";
// import { mapGetters } from "vuex";
// import ListItem from '@/components/ListItem.vue';

export default {
  components: { ListItem },

  computed: {
    // 3.
    // 왼쪽 변수 오른쪽 store 안에 getters
    // ...mapGetters({
    //   askItems: "fetchedAsk",
    // }),
    // 배열로 넣을 수 있음
    // ...mapGetters(["fetchedAsk"]),
    // fetchedAsk를 바인딩 가능
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
    // this.$store.dispatch("FETCH_ASK");
    // fetchAskList()
    //   .then((response) => (this.ask = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
