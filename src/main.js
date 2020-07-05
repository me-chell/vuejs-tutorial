/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import App from './App.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

// Custom directives
Vue.directive('theme', {
  bind(el, binding, vnode) {
    binding.value === 'wide'
      ? (el.style.maxWidth = '1200px')
      : (el.style.maxWidth = '560px');
    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  },
});

Vue.config.productionTip = false;

// eslint-disable-next-line import/prefer-default-export
export const bus = new Vue();

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
