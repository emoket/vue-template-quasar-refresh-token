<script setup lang="ts">
import { ref } from 'vue';
import { Credentials } from '../interfaces/index';
import { useUserAuth } from '../../composables/useUserAuth';
import {
  symRoundedBadge,
  symRoundedPassword,
} from '@quasar/extras/material-symbols-rounded';

const { signInUser } = useUserAuth();

const credentials = ref<Credentials>({
  username: '',
  password: '',
});

const onSubmit = async () => {
  const response = await signInUser({
    username: credentials.value.username,
    password: credentials.value.username,
  });
  console.log('response: ' + response);
};

const onReset = () => {
  credentials.value.username = '';
  credentials.value.password = '';
};
</script>

<template>
  <div class="flex flex-center">
    <q-card bordered flat style="width: 350px">
      <q-card-section>
        <q-avatar
          size="100px"
          color="primary"
          text-color="white"
          class="absolute-center shadow-10"
        >
          L
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-center q-pt-lg">
          <div class="col text-h6 ellipsis">Log in</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
          <q-input
            autofocus
            filled
            v-model="credentials.username"
            ref="username"
            label="사번 *"
            hint="8 또는 9사번 8자리"
            lazy-rules
            :rules="[(val) => (val && val.length > 7) || '필수 항목입니다.']"
          >
            <template v-slot:prepend>
              <q-icon :name="symRoundedBadge" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="credentials.password"
            ref="password"
            label="비밀번호 *"
            hint="LDAP Password"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '필수 항목입니다.']"
          >
            <template v-slot:prepend>
              <q-icon :name="symRoundedPassword" />
            </template>
          </q-input>

          <q-card-actions>
            <q-btn
              label="로그인"
              type="submit"
              color="primary"
              class="q-py-sm q-px-md"
            />
            <q-space />
            <q-btn
              label="초기화"
              type="reset"
              color="negative"
              flat
              class="q-ml-sm"
            />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(135deg, #39363c 0%, #717171 100%);
}
</style>
