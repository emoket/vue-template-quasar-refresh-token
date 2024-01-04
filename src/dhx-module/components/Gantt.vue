<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gantt } from '@dhx/trial-gantt';
import '@dhx/trial-gantt/codebase/dhtmlxgantt.css';
import '@dhx/trial-gantt/codebase/skins/dhtmlxgantt_material.css';
import { tasks } from './gantt-data';

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
  <div id="gantt_div" style="height: calc(100vh - 100px)"></div>
</template>
