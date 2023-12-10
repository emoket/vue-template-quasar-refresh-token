<script setup lang="ts">
import DarkToggle from '../../theme/DarkToggle.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="text-white bg-primary">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          NE.ONE
        </q-toolbar-title>
        <DarkToggle />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="items-center justify-center window-width row">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
