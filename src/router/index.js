import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main';
import Training from "@/views/Training";
import Start from "@/views/Edit";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/training/:id',
    name: 'training',
    props: true,
    component: Training
  },
  {
    path: '/edit/:id',
    name: 'edit',
    props: true,
    component: Start
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
