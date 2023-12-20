<script>
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
import { columns, cards } from './kanban-data';

export default {
  mounted() {
    new Kanban(this.$refs.cont, {
      cards: cards,
      columns: columns,
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
