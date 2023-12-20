<script setup lang="ts">
import { useQuasar } from 'quasar';
import {
  symRoundedDarkMode,
  symRoundedLightMode,
  symRoundedSettings,
} from '@quasar/extras/material-symbols-rounded';

const $q = useQuasar();
const isDarkMode = JSON.parse(localStorage.getItem('dark-mode') || '{}');

$q.dark.set(isDarkMode === '' ? 'auto' : isDarkMode); // or false or "auto"

import { watch } from 'vue';
watch(
  () => $q.dark.isActive,
  (val) => {
    console.log(val ? 'On dark mode' : 'On light mode');
    localStorage.setItem('dark-mode', JSON.stringify(val));
  },
);

import { storeToRefs } from 'pinia';
import { useLayoutStore } from '../store/useLayoutStore';
const layoutStore = useLayoutStore();
const { menuMini, menuAutoExpand } = storeToRefs(layoutStore);

const updateToggleMini = (value: boolean) => {
  localStorage.setItem('menu-mini', JSON.stringify(value));
};

const updateToggleExpand = (value: boolean) => {
  localStorage.setItem('menu-auto-expand', JSON.stringify(value));
};
</script>

<template>
  <!-- <q-btn stretch flat :icon="symRoundedSettings" @click="toggleTheme" /> -->
  <q-btn-dropdown stretch flat :icon="symRoundedSettings">
    <div style="max-width: 350px">
      <q-list padding>
        <q-item-label header>다크 모드 설정</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>{{
              $q.dark.isActive ? '다크 모드' : '라이트 모드'
            }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              color="blue"
              v-model="$q.dark.isActive"
              val="battery"
              :icon="
                $q.dark.isActive ? symRoundedDarkMode : symRoundedLightMode
              "
            />
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>메뉴 설정</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>아이콘 메뉴</q-item-label>
            <q-item-label caption>좌측 메뉴 최소화 On/Off</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-toggle
              color="green"
              v-model="menuMini"
              @update:model-value="updateToggleMini"
            />
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>메뉴 자동 확장</q-item-label>
            <q-item-label caption>좌측 메뉴 자동 확장 On/Off</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-toggle
              color="red"
              v-model="menuAutoExpand"
              @update:model-value="updateToggleExpand"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-btn-dropdown>
</template>
