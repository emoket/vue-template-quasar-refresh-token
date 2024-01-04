<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
// import data
import { data } from './spreadsheet-data';

export default {
  data() {
    return {
      spreadsheet: null,
    };
  },

  mounted() {
    this.spreadsheet = new Spreadsheet(this.$refs.cont, {});
    this.spreadsheet.parse(data);
  },
  unmounted() {
    this.spreadsheet.destructor();
    // this.$refs.cont.innerHTML = '';
  },
};
</script>

<template>
  <q-page>
    <div ref="cont" style="width: 100%; height: calc(100vh - 100px)"></div>
  </q-page>
</template>
