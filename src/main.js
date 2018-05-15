import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './app.vue';

Vue.use(App);
Vue.use(ElementUI);

new Vue({
  el: '#appIndex',
  render: h => h(App)
});