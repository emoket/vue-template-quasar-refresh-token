<script setup lang="ts">
import { useUserAuth } from '../composables/useUserAuth';
import { ionLogOutOutline } from '@quasar/extras/ionicons-v6';

const { signOutUser } = useUserAuth();
</script>

<template>
  <q-btn
    stretch
    flat
    color="white"
    :icon="ionLogOutOutline"
    @click="signOutUser"
  />
</template>

<style lang="scss" scoped></style>
