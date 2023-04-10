import VueRouter from "vue-router";
import Vue from "vue";

import Ask from "../views/AskView.vue";
import Jobs from "../views/JobsView.vue";
import News from "../views/NewsView.vue";
import User from "../views/UserView.vue";
import Item from "../views/ItemView.vue";
import store from "../store/index.js";

import bus from "@/utils/bus";
// import createListView from "@/views/CreateListView";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "news",
    },
    {
      path: "/news",
      name: "news",
      component: News,
      // component: createListView("News"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: Ask,
      // component: createListView("Ask"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
      // component: createListView("Jobs"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: "/user/:id",
      component: User,
    },
    {
      path: "/item/:id",
      component: Item,
    },
  ],
});

export default router;
