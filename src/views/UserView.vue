<template>
  <div>
    <p>
      name :
      {{ userInfo.id }}
    </p>
    <p>
      karma :
      {{ userInfo.karma }}
    </p>
    <p>
      created :
      {{ userInfo.created }}
    </p>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
    // ...mapGetters(["fetchUser"]),
  },

  created() {
    const userName = this.$route.params.id;

    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
