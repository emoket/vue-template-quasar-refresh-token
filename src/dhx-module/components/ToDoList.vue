<script>
import { ToDo } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
// import data
import { users, tasks, projects } from './todolist-data';

export default {
  data() {
    return {
      todolist: null,
    };
  },
  mounted() {
    this.todolist = new ToDo(this.$refs.cont, {});
    this.todolist.parse({ users, tasks, projects });
  },
  unmounted() {
    this.todolist.destructor();
    // this.$refs.cont.innerHTML = '';
  },
};
</script>

<template>
  <q-page>
    <div ref="cont" style="width: 100%; height: calc(100vh - 50px)"></div>
  </q-page>
</template>
