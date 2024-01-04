import { RouteRecordRaw } from 'vue-router';
import authRouter from '@/auth/router';
import privateRouter from '@/private-module/router';
import dhxRouter from '@/dhx-module/router';
// import { requiereAuthGuard } from './GuardsAuth';

export const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    ...authRouter,
  },
  {
    path: '/dhx',
    ...dhxRouter,
  },
  {
    path: '/',
    // beforeEnter: [requiereAuthGuard],
    ...privateRouter,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/NotFoundPage.vue'),
  },
];
