import axios from 'axios';
import {
  IsDevMode,
  VITE_APP_BACKEND_DEV_URL,
  VITE_APP_BACKEND_PROD_URL,
} from '@/config/environment';

import { useUserStore } from '@/keycloak-module/useUserStore';

const axiosInstance = axios.create({
  baseURL: IsDevMode ? VITE_APP_BACKEND_DEV_URL : VITE_APP_BACKEND_PROD_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.accessToken;
    if (token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosInstance };
