import Vue from 'vue';

import router from './router';

import { store } from './stores/todo.store';

// Import font-awsome supported Vue.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt, faPlus, faSearch, faTimes, faExternalLinkAlt, faListAlt, faBars, faStar } from '@fortawesome/free-solid-svg-icons';

// Import bootstrap-vue library
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';

// Import custom filters on HTML
import './filters/datetime.filter';

// Import service worker to support PWA
import './registerServiceWorker';

// Import global styles
// require('@/assets/css/theme.css');
require('@/assets/css/global-customized.css');

// Add imported font-awesome icons to library before using them in component
library.add(faTrashAlt, faPlus, faSearch, faTimes, faExternalLinkAlt, faListAlt, faBars, faStar);

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
