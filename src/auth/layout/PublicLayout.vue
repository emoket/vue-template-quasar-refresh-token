<script setup lang="ts">
import DarkToggle from '../../theme/DarkToggle.vue';
import Footer from '../../components/Footer.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header borderd class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          CUSTOM UI
        </q-toolbar-title>

        <!-- toggle button -->
        <DarkToggle />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="items-center justify-center row">
        <router-view />
      </q-page>
    </q-page-container>

    <Footer />
  </q-layout>
</template>
