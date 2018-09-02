import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import fortawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';
import VeLine from 'v-charts/lib/line.common';
import VeScatter from 'v-charts/lib/scatter.common';
import VueScrollPicker from 'vue-scroll-picker';
import * as Firebase from 'firebase/app';

fortawesome.library.add(faFreeSolid);

const config = {
  apiKey: "AIzaSyDSqeEVP7-yjyWhFZOkGih3-9MOBsMVY8s",
  authDomain: "groove-f2d87.firebaseapp.com",
  databaseURL: "https://groove-f2d87.firebaseio.com",
  projectId: "groove-f2d87",
  storageBucket: "groove-f2d87.appspot.com",
  messagingSenderId: "1093776659734"
};
Firebase.initializeApp(config);

Vue.use(VueScrollPicker);
Vue.component(VeLine.name, VeLine)
Vue.component(VeScatter.name, VeScatter)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
