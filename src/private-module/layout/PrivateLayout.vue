<script setup lang="ts">
import { ref } from 'vue';
import { useUserAuth } from '../../composables/useUserAuth';
import DarkToggle from '../../theme/DarkToggle.vue';

const { userData, loadingUser, logoutUser } = useUserAuth();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <div v-if="loadingUser">Loading....</div>
  <q-layout view="lHh Lpr lFf" v-else>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />
        <q-toolbar-title> Custom UI </q-toolbar-title>
        <DarkToggle />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple tag="a" :to="{ name: 'home' }">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>
        </q-list>

        <q-list padding>
          <q-expansion-item
            group="somegroup"
            icon="explore"
            label="Main-menu"
            default-opened
            header-class="text-primary"
          >
            <q-item clickable v-ripple tag="a" :to="{ name: 'politicas' }">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
              <q-item-section> Sub-menu </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item
            group="somegroup"
            icon="perm_identity"
            label="Second"
            header-class="text-teal"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />
        </q-list>

        <q-list padding>
          <q-item
            clickable
            v-ripple
            tag="a"
            @click="logoutUser"
            class="text-white bg-red"
          >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section> 로그아웃 </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="bg-transparent absolute-bottom">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://i.pravatar.cc/150?img=2" />
          </q-avatar>
          <div class="text-weight-bold">
            {{ userData?.username }}
          </div>
          <div>{{ userData?.rol }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container v-if="!loadingUser">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
