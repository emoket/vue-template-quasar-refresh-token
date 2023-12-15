<script>
import fromCDN from 'from-cdn';
// import data
import { autoPlaceData } from './diagram-data';

export default {
  name: 'DefaultEditorAutoplacement',
  data: () => ({
    editor: null,
  }),
  mounted() {
    fromCDN([
      'https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js',
      'https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css',
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: 'default', // ['org', 'minimap']
        autoplacement: {
          mode: 'direct',
        },
      });
      this.editor.parse(autoPlaceData);
    });
  },
};
</script>

<template>
  <q-page style="width: 100%; height: calc(100vh - 100px)">
    <div class="dhx_sample-container">
      <div class="dhx_sample-widget" ref="editor"></div>
    </div>
  </q-page>
</template>
