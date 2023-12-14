<script setup lang="ts">
import { ref } from 'vue';
import DarkToggle from '../../theme/DarkToggle.vue';
import Footer from '../../components/Footer.vue';
import EssentialLink from '../../components/EssentialLink.vue';
import { ionMenu, ionHomeOutline } from '@quasar/extras/ionicons-v6';
import { dhxMenus } from '../../menus';

const drawer = ref(false);
const miniState = ref(true);
</script>

<template>
  <q-layout view="hHh lpR fFf" reveal>
    <q-header bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-secondary'">
      <q-toolbar class="q-px-none">
        <q-btn stretch flat :icon="ionMenu" @click="drawer = !drawer" />

        <q-separator vertical inset />

        <q-btn stretch flat :icon="ionHomeOutline" :to="{ name: 'home' }" />

        <q-toolbar-title>DHTMLX DEMO</q-toolbar-title>

        <q-space />

        <DarkToggle />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="250"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: '0' }">
        <q-list padding>
          <!-- Menu List -->
          <EssentialLink
            v-for="link in dhxMenus"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>
