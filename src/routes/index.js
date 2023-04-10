import VueRouter from 'vue-router'
import Vue from 'vue'

// import Ask from "../views/AskView.vue";
// import Jobs from "../views/JobsView.vue";
// import News from "../views/NewsView.vue";
import User from '../views/UserView.vue'
import Item from '../views/ItemView.vue'
import createListView from '@/views/CreateListView'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      path: '/news',
      name: 'news',
      // component: News,
      component: createListView('News')
    },
    {
      path: '/ask',
      name: 'ask',
      // component: Ask,
      component: createListView('Ask')
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: Jobs,
      component: createListView('Jobs')
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/item/:id',
      component: Item
    }
  ]
})

export default router
