<template>
  <div>
    <section>
      <UserProfile :userInfo="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template
        >1
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <!-- 질문 댓글 -->
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>

    <!-- {{ itemsData }} -->
    <!-- <p>{{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.content }}</p> -->
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: { UserProfile },
  computed: {
    // itemsData() {
    //   return this.$store.state.items;
    // },

    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;

    console.log(itemId);

    this.$store.dispatch("FETCH_ITEMS", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
.fa-user {
  font-size: 2.5rem;
}
</style>
