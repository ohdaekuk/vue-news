<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: { ListItem },
  created() {
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
