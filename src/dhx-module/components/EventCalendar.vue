<script lang="js">
import { EventCalendar } from '@dhx/trial-eventcalendar';
import '@dhx/trial-eventcalendar/dist/event-calendar.css';
import { events, date } from './event-calendar-data';

export default {
  mounted() {
    new EventCalendar(this.$refs.cont, {
      events: events,
      date: date,
    });
  },
  unmounted() {
    this.$refs.cont.innerHTML = '';
  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
