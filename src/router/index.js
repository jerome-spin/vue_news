import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ],
});
