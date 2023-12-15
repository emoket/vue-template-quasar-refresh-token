<script setup lang="ts">
import { symRoundedLogout } from '@quasar/extras/material-symbols-rounded';
import { useUserAuth } from '../composables/useUserAuth';

const { signOutUser } = useUserAuth();
</script>

<template>
  <q-btn
    stretch
    flat
    color="white"
    :icon="symRoundedLogout"
    @click="signOutUser"
  />
</template>

<style lang="scss" scoped></style>
