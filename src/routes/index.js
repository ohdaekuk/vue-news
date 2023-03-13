import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Ask from "../views/AskView.vue";
import Jobs from "../views/JobsView.vue";
import News from "../views/NewsView.vue";
import User from "../views/UserView.vue";
import Item from "../views/ItemView.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      // path : url 주소
      path: "/news",

      // component : url 주소로 요청이 왔을 때 표시 될 컴포넌트
      component: News,
    },
    {
      path: "/jobs",
      component: Jobs,
    },
    {
      path: "/ask",
      component: Ask,
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
