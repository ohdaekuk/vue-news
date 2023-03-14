import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  // state 호출은 this.$store.state
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: [],
    items: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchUser(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.items;
    },
  },
  mutations,
  // actions 호출은 this.$store.dispatch('actions이름')
  actions,
});

export default store;
