<script lang="ts">
const tasks = {
  data: [
    {
      id: '10',
      text: 'Project #1',
      start_date: '01-04-2025',
      duration: 3,
      order: 10,
      progress: 0.4,
      open: true,
    },
    {
      id: '1',
      text: 'Task #1',
      start_date: '02-04-2025',
      duration: 2,
      order: 10,
      progress: 0.6,
      parent: '10',
    },
    {
      id: '2',
      text: 'Task #2',
      start_date: '01-04-2025',
      duration: 2,
      order: 20,
      progress: 0.6,
      parent: '10',
    },
    {
      id: '20',
      text: 'Project #2',
      start_date: '01-04-2025',
      duration: 3,
      order: 10,
      progress: 0.4,
      type: 'project',
      open: true,
    },
    {
      id: '3',
      text: 'Task #3',
      start_date: '02-04-2025',
      duration: 2,
      order: 10,
      progress: 0.6,
      parent: '20',
    },
    {
      id: '4',
      text: 'Task #4',
      start_date: '01-04-2025',
      duration: 2,
      order: 20,
      progress: 0.6,
      parent: '20',
    },
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' },
    { id: 2, source: 2, target: 3, type: '0' },
    { id: 3, source: 3, target: 4, type: '0' },
    { id: 4, source: 2, target: 5, type: '0' },
  ],
  markers: [
    {
      start: new Date(2025, 4, 1),
      text: 'Start',
      css: '',
      title: 'start point of project',
    },
    {
      start: new Date(2020, 2, 8),
      text: 'Middle point',
      css: 'myMiddleClass',
      title: '',
    },
    {
      start: new Date(2020, 2, 11),
      text: 'End point',
      css: 'myEndClass',
      title: 'end point of project',
    },
  ],
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gantt } from '@dhx/trial-gantt';
import '@dhx/trial-gantt/codebase/dhtmlxgantt.css';
import '@dhx/trial-gantt/codebase/skins/dhtmlxgantt_material.css';

let eventIDs: string[] = [];

onMounted(() => {
  // gantt.config.work_time = true;
  // gantt.config.duration_unit = 'hour';
  gantt.init('gantt_div');
  gantt.parse(tasks);

  // eslint-disable-next-line
  const onTaskClick = gantt.attachEvent('onTaskClick', function (id, e) {
    gantt.message('onTaskClick: ' + id);
    return true;
  });

  console.log(onTaskClick);

  eventIDs.push(onTaskClick);
});

onUnmounted(() => {
  gantt.clearAll();
  eventIDs.forEach((event) => gantt.detachEvent(event));
  eventIDs = [];
});
</script>

<template>
  <q-page>
    <div id="gantt_div" style="height: 100vh"></div>
  </q-page>
</template>
