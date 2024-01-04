import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    menuMini: useLocalStorage(
      'menu-mini',
      (localStorage.getItem('menu-mini') || 'false') === 'false',
    ),
    menuAutoExpand: useLocalStorage(
      'menu-auto-expand',
      (localStorage.getItem('menu-auto-expand') || 'false') === 'false',
    ),

    darkMode: useLocalStorage(
      'dark-mode',
      (localStorage.getItem('dark-mode') || 'true') === 'true',
    ),
  }),
  getters: {
    // isAutoMode: (state) => state.darkMode === 'auto',
  },
});
