import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import fortawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';
// import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common';
// import VuePickers from "vue-pickers";
import VueScrollPicker from 'vue-scroll-picker';

fortawesome.library.add(faFreeSolid);

// Vue.use(VCharts);
// Vue.use(VuePickers);
Vue.use(VueScrollPicker);
Vue.component(VeLine.name, VeLine)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
