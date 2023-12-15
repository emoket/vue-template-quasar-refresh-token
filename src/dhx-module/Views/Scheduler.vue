<script>
import { scheduler } from 'dhtmlx-scheduler';

export default {
  props: {
    events: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    $_initDataProcessor: function () {
      if (!scheduler.$_dataProcessorInitialized) {
        scheduler.createDataProcessor((entity, action, data, id) => {
          this.$emit(`${entity}-updated`, id, action, data);
        });
        scheduler.$_dataProcessorInitialized = true;
      }
    },
  },
  mounted: function () {
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
      new Date(2023, 12, 15),
      'week',
    );
    scheduler.parse(this.$props.events);
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
@import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
</style>
