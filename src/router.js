import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import('./views/search.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () =>
        import('./views/history.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
