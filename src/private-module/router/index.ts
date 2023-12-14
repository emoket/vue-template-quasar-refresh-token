import PrivateLayout from '../layout/PrivateLayout.vue';

export default {
  component: PrivateLayout,
  redirect: { path: '' },
  children: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('../Views/Home.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: () => import('../Views/Dashboard.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      meta: { requiresAuth: true },
      component: () => import('../Views/Chart.vue'),
    },
    // {
    //   path: '/dhx',
    //   name: 'dhx',
    //   meta: { requiresAuth: true },
    //   component: () => import('../Views/DhtmlxDemo.vue'),
    // },
  ],
};
