<template>
  <q-page>
    <div id="gantt_here" style="height: 500px"></div>
  </q-page>
</template>

<script lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

export default {
  setup() {
    let eventIDs = [];
    onMounted(() => {
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
      };

      gantt.init('gantt_here');
      gantt.parse(tasks);

      const onTaskClick = gantt.attachEvent('onTaskClick', function (id, e) {
        gantt.message('onTaskClick: ' + id);
        return true;
      });

      eventIDs.push(onTaskClick);
    });

    onUnmounted(() => {
      gantt.clearAll();
      eventIDs.forEach((event) => gantt.detachEvent(event));
      eventIDs = [];
    });
  },
};
</script>
