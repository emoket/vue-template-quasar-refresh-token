import axios from 'axios';
import {
  IsDevMode,
  VITE_APP_BACKEND_DEV_URL,
  VITE_APP_BACKEND_PROD_URL,
} from '../config/environment';

axios.defaults.withCredentials = true;

const BaseApiURL = axios.create({
  baseURL: IsDevMode ? VITE_APP_BACKEND_DEV_URL : VITE_APP_BACKEND_PROD_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default BaseApiURL;
