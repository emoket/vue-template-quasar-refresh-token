import DhxLayout from '../layout/DhxLayout.vue';

export default {
  component: DhxLayout,
  redirect: { path: '' },
  children: [
    {
      path: '/dhx/gantt',
      name: 'dhx-gantt',
      meta: { requiresAuth: true },
      component: () => import('../Views/Gantt.vue'),
    },
    {
      path: '/dhx/kanban',
      name: 'dhx-vue-kanban',
      meta: { requiresAuth: true },
      component: () => import('../Views/Kanban.vue'),
    },
    {
      path: '/dhx/scheduler',
      name: 'dhx-scheduler',
      meta: { requiresAuth: true },
      component: () => import('../Views/Scheduler.vue'),
    },
  ],
};
