<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import ListMixin from "@/mixins/ListMixin";

export default {
  components: { ListItem },
  mixins: [ListMixin],
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
};
</script>

<style></style>
