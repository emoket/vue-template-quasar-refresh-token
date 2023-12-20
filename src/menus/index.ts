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
  symRoundedPivotTableChart,
  symRoundedViewKanban,
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

// https://dhtmlx.com/docs/products/
// 1. Gantt (o)
// 2. Scheduler (o)
// 3. Suite - (esp. Grid) (o)
// 4. Diagram (o)
// 5. Spreadsheet (o)
// 6. Kanban (x)
// 7. To Do List (x)
// 8. Event Calendar (x)
// 9. Rich Text Editor (o)
// 10. Vault (o)
// 11. Pivot (o)
const dhxMenus = [
  {
    title: '@dhx/trial-gantt',
    icon: symRoundedClearAll,
    to: '/dhx/gantt',
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
    title: 'cdn-diagram',
    icon: symRoundedFamilyHistory,
    to: '/dhx/diagram',
  },
  {
    title: 'cdn-vault',
    icon: symRoundedHardDrive,
    to: '/dhx/vault',
  },
  {
    title: 'cdn-pivot',
    icon: symRoundedPivotTableChart,
    to: '/dhx/pivot',
  },
  {
    title: '@dhx/trial-eventcalendar (X)',
    icon: symRoundedToday,
    to: '/dhx/event-calendar',
  },
  {
    title: '@dhx/trial-kanban (X)',
    icon: symRoundedViewKanban,
    to: '/dhx/kanban',
  },
  {
    title: '@dhx/trial-todolist (X)',
    icon: symRoundedChecklist,
    to: '/dhx/todolist',
  },
];

export { privateMenus, dhxMenus };
