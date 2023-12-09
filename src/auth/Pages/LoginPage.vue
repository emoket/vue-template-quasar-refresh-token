<script setup lang="ts">
import { ref } from 'vue';
import { Credentials } from '../interfaces/index';
import { useUserAuth } from '../../composables/useUserAuth';

const { singInUser } = useUserAuth();

const credentials = ref<Credentials>({
  username: '',
  password: '',
});

const onSubmit = async () => {
  const response = await singInUser({
    username: credentials.value.username,
    password: credentials.value.username,
  });
  console.log('response: ' + response);
};
</script>

<template>
  <div class="column q-pa-md row">
    <q-card square class="shadow-6" style="width: 50vh; height: 450px">
      <q-form class="q-px-sm q-pt-md" @submit="onSubmit">
        <q-card-section class="bg-primary">
          <h4 class="text-center text-white text-h5 q-my-md">My new App</h4>
        </q-card-section>
        <q-card-section class="q-mt-md">
          <q-input
            ref="username"
            class="q-mb-md"
            label="아이디"
            outlined
            clearable
            v-model="credentials.username"
            type="text"
            :rules="[(val) => (val && val.length > 0) || '필수 항목입니다.']"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            ref="password"
            label="Contraseña"
            outlined
            clearable
            v-model="credentials.password"
            type="text"
            :rules="[(val) => (val && val.length > 0) || '필수 항목입니다.']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            size="lg"
            color="secondary"
            type="submit"
            class="text-white full-width"
            label="로그인"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<style scoped></style>
