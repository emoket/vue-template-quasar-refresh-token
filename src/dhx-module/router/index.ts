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
      path: '/dhx/event-calendar',
      name: 'dhx-event-calendar',
      meta: { requiresAuth: true },
      component: () => import('../Views/EventCalendar.vue'),
    },
    {
      path: '/dhx/scheduler',
      name: 'dhx-scheduler',
      meta: { requiresAuth: true },
      component: () => import('../Views/Scheduler.vue'),
    },
    {
      path: '/dhx/richtexteditor',
      name: 'dhx-richtexteditor',
      meta: { requiresAuth: true },
      component: () => import('../Views/RichTextEditor.vue'),
    },
    {
      path: '/dhx/suite',
      name: 'dhx-suite',
      meta: { requiresAuth: true },
      component: () => import('../Views/Suite.vue'),
    },
    {
      path: '/dhx/spreadsheet',
      name: 'dhx-spreadsheet',
      meta: { requiresAuth: true },
      component: () => import('../Views/SpreadSheet.vue'),
    },
    {
      path: '/dhx/todolist',
      name: 'dhx-todolist',
      meta: { requiresAuth: true },
      component: () => import('../Views/ToDoList.vue'),
    },
    {
      path: '/dhx/diagram',
      name: 'dhx-diagram',
      meta: { requiresAuth: true },
      component: () => import('../Views/Diagram.vue'),
    },
    {
      path: '/dhx/vault',
      name: 'dhx-vault',
      meta: { requiresAuth: true },
      component: () => import('../Views/VaultCdnParent.vue'),
    },
    {
      path: '/dhx/pivot',
      name: 'dhx-pivot',
      meta: { requiresAuth: true },
      component: () => import('../Views/PivotEvents.vue'),
    },
    {
      path: '/dhx/kanban',
      name: 'dhx-kanban',
      meta: { requiresAuth: true },
      component: () => import('../Views/Kanban.vue'),
    },
  ],
};
