import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  // state 호출은 this.$store.state
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations,
  // actions 호출은 this.$store.dispatch('actions이름')
  actions,
});

export default store;
