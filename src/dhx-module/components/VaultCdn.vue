<template>
  <div ref="container" style="width: 100%; height: 100vh"></div>
</template>

<script>
import fromCDN from 'from-cdn';

export default {
  props: {
    target: String,
    mode: { type: String, default: 'list' },
    autosend: Boolean,
    toolbar: Boolean,
  },
  created: function () {
    this.ready = fromCDN([
      'https://cdn.dhtmlx.com/vault/3.0/vault.js',
      'https://cdn.dhtmlx.com/vault/3.0/vault.css',
    ]);
  },
  mounted: function () {
    this.ready.then(() => {
      /* global dhx */
      this.vault = new dhx.Vault(this.$refs.container, {
        mode: this.mode,
        uploader: {
          autosend: this.autosend,
          target: this.target,
        },
        toolbar: this.toolbar,
      });

      this.$emit('ready', this.vault);
    });
  },
  beforeUnmount: function () {
    if (this.vault) this.vault.destructor();
  },
};
</script>
