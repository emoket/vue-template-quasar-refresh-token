import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layoutStore', () => {
  const menuAutoExpand = ref(
    (localStorage['menu-auto-expand'] || 'false') === 'true',
  );
  const menuMini = ref((localStorage['menu-mini'] || 'false') === 'true');

  return { menuAutoExpand, menuMini };
});
