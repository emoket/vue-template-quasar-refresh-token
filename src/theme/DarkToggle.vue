<script setup lang="ts">
import { useQuasar } from 'quasar';
import { watch } from 'vue';

import { ionSunnyOutline, ionMoonOutline } from '@quasar/extras/ionicons-v6';

const $q = useQuasar();
const isDarkMode = JSON.parse(localStorage.getItem('darkMode') || '{}');

// set status
$q.dark.set(isDarkMode === '' ? 'auto' : isDarkMode); // or false or "auto"

watch(
  () => $q.dark.isActive,
  (val) => {
    // console.log(val ? 'On dark mode' : 'On light mode')
    localStorage.setItem('darkMode', JSON.stringify(val));
  },
);

const toggleTheme = () => $q.dark.toggle();
</script>

<template>
  <q-btn
    stretch
    flat
    :icon="$q.dark.isActive ? ionMoonOutline : ionSunnyOutline"
    @click="toggleTheme"
  />
</template>
