<script>
import Vault from './VaultCdn.vue';
export default {
  components: {
    Vault,
  },
  mounted() {
    const sub = this.$refs.files;
    sub.ready.then(() => {
      sub.vault.data.add({
        name: 'By-API.png',
        size: 12000,
      });
    });
  },
  methods: {
    loadData(vault) {
      vault.data.add({
        name: 'By-Event.md',
        size: 44800,
      });
    },
  },
};
</script>

<template>
  <div class="app-box">
    <p>Code for vaults on this page is loaded through CDN on demand</p>
    <p>
      You can use promise or event to catch the moment when UI is ready to load
      the data
    </p>

    <div class="q-gutter-xl q-mt-xl">
      <div>
        <p class="text-center text-title">features: Toolbar Autosend</p>
        <Vault toolbar autosend class="base-size"></Vault>
      </div>

      <div>
        <p class="text-center text-title">
          features: Toolbar Grid-mode LoadData
        </p>
        <Vault
          v-on:ready="loadData"
          toolbar
          mode="grid"
          class="base-size"
        ></Vault>
      </div>

      <div>
        <p class="text-center text-title">features: Toolbar List-mode</p>
        <Vault ref="files" toolbar mode="list" class="base-size"></Vault>
      </div>
    </div>
  </div>
</template>

<style>
.app-box {
  padding: 20px;
}
.base-size {
  width: 440px;
  height: 120px;
}
</style>
