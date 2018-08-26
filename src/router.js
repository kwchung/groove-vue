import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Start from './views/Start.vue';
import Purpose from './views/Purpose.vue';
import Action from './views/Action.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/start',
      name: 'Start',
      component: Start,
      meta:{
        title:'開始健身'
      }
    },
    {
      path: '/purpose',
      name: 'Purpose',
      component: Purpose,
      meta:{
        title:'健身目標'
      }
    },
    {
      path: '/action',
      name: 'Action',
      component: Action,
      meta:{
        title:'選擇運動'
      }
    },
  ],
});
