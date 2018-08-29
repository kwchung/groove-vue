import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Start from './views/Start.vue';
import Purpose from './views/Purpose.vue';
import Action from './views/Action.vue';
import Intensity from './views/Intensity.vue';
import Profile from './views/Profile.vue';
import History from './views/History.vue';
import HistoryList from './views/HistoryList.vue';
import HistoryDetail from './views/HistoryDetail.vue';

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
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/start',
      name: 'Start',
      component: Start,
      meta: {
        title: '開始健身',
        back: true,
      },
    },
    {
      path: '/purpose',
      name: 'Purpose',
      component: Purpose,
      meta: {
        title: '健身目標',
        back: true,
      },
    },
    {
      path: '/action',
      name: 'Action',
      component: Action,
      meta: {
        title: '選擇運動',
        back: false,
      },
    },
    {
      path: '/intensity',
      name: 'Intensity',
      component: Intensity,
      meta: {
        title: '測試最大肌力',
        back: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: '個人資料',
        back: false,
      },
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta: {
        title: '歷史紀錄',
        back: false,
      },
    },
    {
      path: '/history-list/:date',
      name: 'HistoryList',
      component: HistoryList,
      meta: {
        title: '歷史紀錄',
        back: true,
      },
    },
    {
      path: '/history-detail/:id',
      name: 'HistoryDetail',
      component: HistoryDetail,
      meta: {
        title: '歷史紀錄',
        back: true,
      },
    },
  ],
});
