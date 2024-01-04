<script setup lang="ts">
import { ref } from 'vue';
import { useUserAuth } from '@/composables/useUserAuth';
import { privateMenus } from '@/menus';
import { symRoundedMenu } from '@quasar/extras/material-symbols-rounded';

// Components import
// import DarkToggle from '@/theme/DarkToggle.vue';
import SettingToggle from '@/theme/SettingToggle.vue';
import FullscreenToogle from '@/components/FullscreenToggle.vue';
import LogoutIconButton from '@/components/LogoutIconButton.vue';
import Footer from '@/components/Footer.vue';
import EssentialLink from '@/components/EssentialLink.vue';

const { loadingUser } = useUserAuth();

const drawer = ref(false);

// Store things
import { storeToRefs } from 'pinia';
import { useLayoutStore } from '@/store/useLayoutStore';
const layoutStore = useLayoutStore();
const { menuMini, menuAutoExpand } = storeToRefs(layoutStore);
</script>

<template>
  <div v-if="loadingUser">Loading....</div>
  <q-layout v-else view="hHh lpR fFf">
    <q-header bordered class="bg-dark">
      <q-toolbar class="q-px-none">
        <q-btn stretch flat :icon="symRoundedMenu" @click="drawer = !drawer" />

        <q-separator vertical inset />

        <!-- <q-toolbar-title>CUSTOM UI</q-toolbar-title> -->
        <q-btn
          stretch
          flat
          label="CUSTOM UI"
          class="text-h6"
          :to="{ name: 'home' }"
        />

        <q-space />

        <FullscreenToogle />

        <!-- <DarkToggle /> -->

        <SettingToggle />

        <q-separator vertical inset />

        <LogoutIconButton />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="menuMini"
      @mouseover="menuAutoExpand ? (menuMini = false) : ''"
      @mouseout="menuAutoExpand ? (menuMini = true) : ''"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: '0' }">
        <q-list padding>
          <!-- Menu List -->
          <EssentialLink
            v-for="link in privateMenus"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container v-if="!loadingUser">
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<!-- <style scoped lang="scss">
.app-header {
  background: $gray-01;
  border-bottom: 1px solid $gray-03;
}
.lnb-drawer {
  background: $gray-01;
}
</style> -->
