import PrivateLayout from '@/private-module/layout/PrivateLayout.vue';

export default {
  component: PrivateLayout,
  redirect: { path: '' },
  children: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('@/private-module/Views/Home.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: () => import('@/private-module/Views/Dashboard.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      meta: { requiresAuth: true },
      component: () => import('@/private-module/Views/Chart.vue'),
    },
    // {
    //   path: '/dhx',
    //   name: 'dhx',
    //   meta: { requiresAuth: true },
    //   component: () => import('@/private-module/Views/DhtmlxDemo.vue'),
    // },
  ],
};
