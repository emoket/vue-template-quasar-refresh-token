import {
  symRoundedTable,
  symRoundedNewspaper,
  symRoundedCalendarMonth,
  symRoundedClearAll,
  symRoundedDashboard,
  symRoundedMonitoring,
  symRoundedScience,
  symRoundedToday,
  symRoundedFormatAlignJustify,
  symRoundedChecklist,
  symRoundedFamilyHistory,
  symRoundedHardDrive,
} from '@quasar/extras/material-symbols-rounded';

const privateMenus = [
  {
    title: 'Dashboard',
    icon: symRoundedDashboard,
    to: '/dashboard',
  },
  {
    title: 'Chart',
    icon: symRoundedMonitoring,
    to: '/chart',
    isSeperator: true,
  },
  {
    title: 'DHTMLX DEMO',
    icon: symRoundedScience,
    to: '/dhx/gantt',
  },
];

const dhxMenus = [
  {
    title: '@dhx/trial-gantt',
    icon: symRoundedClearAll,
    to: '/dhx/gantt',
  },
  {
    title: '@dhx/trial-eventcalendar (X)',
    icon: symRoundedToday,
    to: '/dhx/event-calendar',
  },
  {
    title: 'dhtmlx-scheduler',
    icon: symRoundedCalendarMonth,
    to: '/dhx/scheduler',
  },
  {
    title: 'cdn-richtext',
    icon: symRoundedNewspaper,
    to: '/dhx/richtexteditor',
  },
  {
    title: 'dhx-suite-grid',
    icon: symRoundedFormatAlignJustify,
    to: '/dhx/suite',
  },
  {
    title: '@dhx/trial-spreadsheet',
    icon: symRoundedTable,
    to: '/dhx/spreadsheet',
  },
  {
    title: '@dhx/trial-todolist (X)',
    icon: symRoundedChecklist,
    to: '/dhx/todolist',
  },
  {
    title: 'cdn-diagram',
    icon: symRoundedFamilyHistory,
    to: '/dhx/diagram',
  },
  {
    title: 'cdn-vault',
    icon: symRoundedHardDrive,
    to: '/dhx/vault',
  },
];

export { privateMenus, dhxMenus };
