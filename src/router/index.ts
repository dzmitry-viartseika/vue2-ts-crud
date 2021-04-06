import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TutorialsList from '@/components/Tutorial/TutorialsList.vue';
import Tutorial from '@/components/Tutorial/Tutorial.vue';
import AddTutorial from '@/components/Tutorial/AddTutorial.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: TutorialsList,
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: Tutorial,
  },
  {
    path: '/add',
    name: 'add',
    component: AddTutorial,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
