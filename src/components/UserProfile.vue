<script setup lang="ts">
import { symRoundedLogout } from '@quasar/extras/material-symbols-rounded';

import { serviceFactory } from '@/keycloak-module/factory';
import { getEnableKeycloak } from '@/keycloak-module/config';
import { useUserStore } from '@/keycloak-module/useUserStore';
import { onMounted } from 'vue';
const userStore = useUserStore();
const keycloakService = serviceFactory(getEnableKeycloak(), userStore);
const logout = () => keycloakService.logout();

const openSettings = () => console.log('open settings');

onMounted(() => keycloakService.login());
</script>

<template>
  <q-item
    class="q-py-none fixed-bottom"
    clickable
    v-ripple
    @click="openSettings"
  >
    <q-item-section avatar>
      <q-avatar size="sm" color="primary" text-color="white">
        {{ userStore?.user?.lastName }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ userStore?.user?.username }}</q-item-label>
      <q-item-label caption>{{ userStore?.roles.join(', ') }}</q-item-label>
    </q-item-section>

    <q-item-section side class="cursor-pointer" @click.stop="logout">
      <q-icon :name="symRoundedLogout" color="grey" />
    </q-item-section>
  </q-item>
</template>
