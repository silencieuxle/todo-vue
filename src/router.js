import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/home.view.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/todo/todo.view.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about/about.view.vue'),
    },
  ],
});
