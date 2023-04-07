<template>
  <div>
    <div class="user-container">
        <div><i class="fa-solid fa-user"></i></div>
        <div class="user-description">
            
            <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역-->
            </slot>
            <div class="time">
                time : 
                {{ userInfo.created }}
                <slot name="time"></slot>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        userInfo : Object
    },  
    computed: {
    // userInfo() {
    //   return this.$store.state.user;
    // },
    // ...mapGetters(["fetchUser"]),
  },
}
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