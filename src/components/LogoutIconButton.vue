<script setup lang="ts">
import { symRoundedLogout } from '@quasar/extras/material-symbols-rounded';

import { onMounted } from 'vue';
import { serviceFactory } from '@/keycloak-module/factory';
import { getEnableKeycloak } from '@/keycloak-module/config';
import { useUserStore } from '@/keycloak-module/useUserStore';
const userStore = useUserStore();
const keycloakService = serviceFactory(getEnableKeycloak(), userStore);
const logout = () => keycloakService.logout();

onMounted(() => keycloakService.login());
</script>

<template>
  <q-btn stretch flat color="white" :icon="symRoundedLogout" @click="logout" />
</template>

<style lang="scss" scoped></style>
