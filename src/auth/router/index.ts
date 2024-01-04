import PublicLayout from '@/auth/layout/PublicLayout.vue';

export default {
  component: PublicLayout,
  redirect: '/auth/login',
  children: [
    {
      path: 'login',
      name: 'login',
      meta: { requiresAuth: false },
      component: () =>
        import(/* webpackChunkName: "login" */ '@/auth/Pages/LoginPage.vue'),
    },
  ],
};
