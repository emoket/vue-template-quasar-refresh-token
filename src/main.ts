import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { Quasar, AppFullscreen, setCssVar } from 'quasar';

import quasarLang from 'quasar/lang/es';

// import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// import quasar css
import 'quasar/src/css/index.sass';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Quasar, {
  plugins: {
    AppFullscreen,
  }, // import Quasar plugins and add here
  lang: quasarLang,

  config: {
    dark: 'auto',
    brand: {
      primary: '#5e64ff',
      secondary: '#26A69A',
      accent: '#9C27B0',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037',
      dark: '#3A4049',
      blue: '#42b0ff',
      // ... or all other brand colors
    },
    //notify: {...}, // default set of options for Notify Quasar plugin
    //loading: {...}, // default set of options for Loading Quasar plugin
    //loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  },
});

// TODO: 적용이 안 된다
// more colors
setCssVar('primary-darkened', '#33aa');
setCssVar('blue-custom', '#42b0ff');
setCssVar('green', '#1ecb4e');

app.mount('#app');
