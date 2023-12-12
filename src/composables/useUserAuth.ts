import { Credentials } from '../auth/interfaces/index';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/useUserStore';

export const useUserAuth = () => {
  const userStore = useUserStore();
  const { userData, loadingUser } = storeToRefs(userStore);

  const signInUser = async (payload: Credentials) => {
    const response = await userStore.loginUser(payload);
    return response;
  };

  const signOutUser = () => {
    userStore.logoutUser();
  };

  return {
    userData,
    loadingUser,
    signInUser,
    signOutUser,
  };
};
