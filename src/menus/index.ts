import {
  ionBarChartOutline,
  ionBeakerOutline,
  ionPieChartOutline,
  ionCalendarOutline,
  ionPodiumOutline,
} from '@quasar/extras/ionicons-v6';

const privateMenus = [
  {
    title: 'Dashboard',
    icon: ionBarChartOutline,
    to: '/dashboard',
  },
  {
    title: 'Chart',
    icon: ionPieChartOutline,
    to: '/chart',
    isSeperator: true,
  },
  {
    title: 'DHTMLX DEMO',
    icon: ionBeakerOutline,
    to: '/dhx/gantt',
  },
];

const dhxMenus = [
  {
    title: '@dhx/trial-gantt',
    icon: ionBarChartOutline,
    to: '/dhx/gantt',
  },
  {
    title: '@dhx/trial-kanban',
    icon: ionPodiumOutline,
    to: '/dhx/kanban',
  },
  {
    title: '@dhx/trial-scheduler',
    icon: ionCalendarOutline,
    to: '/dhx/scheduler',
  },
];

export { privateMenus, dhxMenus };
