<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '#',
  },
  isSeperator: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <q-item clickable v-ripple :to="to" class="q-py-none">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator v-if="isSeperator" />
</template>
