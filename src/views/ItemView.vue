<template>
  <div>{{ itemsData }}</div>
</template>

<script>
export default {
  computed: {
    itemsData() {
      return this.$store.state.items;
    },
  },
  created() {
    const itemId = this.$route.params.id;

    console.log(itemId);

    this.$store.dispatch("FETCH_ITEMS", itemId);
  },
};
</script>

<style></style>
