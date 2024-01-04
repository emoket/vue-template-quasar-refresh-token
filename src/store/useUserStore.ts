import { ref } from 'vue';
import { defineStore } from 'pinia';
import router from '@/router/index';
import { Username, Credentials, AuthorizeStatus } from '@/auth/interfaces';

export const useUserStore = defineStore('user', () => {
  const userData = ref<Username | null>(null);
  const userToken = ref<string | undefined>(undefined);
  const loadingUser = ref<boolean>(false);
  // const timerForRefreshToken = ref<number | undefined>(undefined);
  const timerForRefreshToken = ref<NodeJS.Timeout | undefined>(undefined); // Change the type to NodeJS.Timeout

  const callRefreshToken = (durationTokenInMinutes: number) => {
    timerForRefreshToken.value = setTimeout(
      async () => {
        await refreshToken();
      },
      durationTokenInMinutes * 60 * 1000,
    );
  };

  const clearRefreshToken = () => {
    clearTimeout(timerForRefreshToken.value);
  };

  const setCurrentUserData = ({
    username,
    role,
    accessToken,
    durationTokenInMinutes,
  }: Username) => {
    userData.value = {
      username,
      role,
    };
    userToken.value = accessToken;
    sessionStorage.setItem('user', AuthorizeStatus.authorize);
    callRefreshToken(durationTokenInMinutes!);
  };

  const refreshToken = async () => {
    try {
      console.log('onRefresh ⚡');

      setCurrentUserData({
        username: 'admin',
        role: 'admin',
        accessToken: 'TokenSuperSeguroRefresh',
        durationTokenInMinutes: 1,
      } as Username);
    } catch (error) {
      sessionStorage.removeItem('user');
      console.error(error);
      logoutUser();
    }
  };

  const loginUser = async (payload: Credentials) => {
    console.log('payload = ' + JSON.stringify(payload));
    try {
      loadingUser.value = true;
      setCurrentUserData({
        username: 'admin',
        role: 'admin',
        accessToken: 'Token JWT inicial',
        durationTokenInMinutes: 1,
      } as Username);
      router.push({ name: 'home' });
    } catch (error) {
      console.error(error);
    } finally {
      loadingUser.value = false;
    }
  };

  const logoutUser = () => {
    userData.value = null;
    userToken.value = undefined;
    sessionStorage.removeItem('user');
    clearRefreshToken();
    router.push({ name: 'login' });
  };

  return {
    userData,
    userToken,
    loadingUser,
    loginUser,
    logoutUser,
    refreshToken,
  };
});
