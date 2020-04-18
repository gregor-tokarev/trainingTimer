import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themeCache: {
      get: key => !!localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, String(value)),
    },
  },
  icons: {
    iconfont: 'mdi'
  },
});
