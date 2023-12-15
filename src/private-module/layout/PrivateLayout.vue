<script setup lang="ts">
import { ref } from 'vue';
import { useUserAuth } from '../../composables/useUserAuth';
import DarkToggle from '../../theme/DarkToggle.vue';
import FullscreenToogle from '../../components/FullscreenToggle.vue';
import LogoutIconButton from '../../components/LogoutIconButton.vue';
import Footer from '../../components/Footer.vue';
import EssentialLink from '../../components/EssentialLink.vue';

const { loadingUser } = useUserAuth();

const drawer = ref(false);
const miniState = ref(true);
</script>

<script lang="ts">
import { privateMenus } from '../../menus';
import { symRoundedMenu } from '@quasar/extras/material-symbols-rounded';
</script>

<template>
  <div v-if="loadingUser">Loading....</div>
  <q-layout v-else view="hHh lpR fFf" reveal>
    <q-header bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'">
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

        <DarkToggle />

        <q-separator vertical inset />

        <LogoutIconButton />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
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
../../menus
