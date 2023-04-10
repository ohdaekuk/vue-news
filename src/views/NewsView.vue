<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import ListMixin from "@/mixins/ListMixin";
// import { fetchNewsList } from "../api/index.js";
// import axios from "axios";

export default {
  components: { ListItem },
  mixins: [ListMixin],
};
</script>

<style></style>
