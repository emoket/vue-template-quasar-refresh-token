<script>
import { scheduler } from 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import { events } from './scheduler-data';

export default {
  methods: {
    $_initDataProcessor() {
      if (!scheduler.$_dataProcessorInitialized) {
        scheduler.createDataProcessor((entity, action, data, id) => {
          this.$emit(`${entity}-updated`, id, action, data);
        });
        scheduler.$_dataProcessorInitialized = true;
      }
    },
  },
  mounted() {
    scheduler.skin = 'material';
    scheduler.config.header = [
      'day',
      'week',
      'month',
      'date',
      'prev',
      'today',
      'next',
    ];
    this.$_initDataProcessor();

    scheduler.init(
      this.$refs.SchedulerComponent,
      new Date(2023, 11, 15),
      'month',
    );
    scheduler.parse(events);
  },
};
</script>

<template>
  <div
    ref="SchedulerComponent"
    style="width: 100%; height: calc(100vh - 50px)"
  ></div>
</template>

<style>
/* @import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css'; */
</style>
