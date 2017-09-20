// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import bootstrapCSS from './assets/bootstrap/css/bootstrap.min.css';
import bootstrapJS from './assets/bootstrap/js/bootstrap.min';
import jquery from './assets/jquery/jquery.min';

Vue.config.productionTip = false;
Vue.use(bootstrapCSS);
Vue.use(jquery);
Vue.use(bootstrapJS);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
