<template>
  <div id="app">
    <Navbar :menus="navbarMenus" :brand="'Toolkit'" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import NavigationService from './services/navigation.service.js';
import NotificationService from './services/notification.service';

import Navbar from './components/navbar/navbar.component.vue';
import Footer from './components/footer/footer.component.vue';

export default {
  name: 'Apm',
  components: {
    Navbar,
    Footer,
  },
  computed: {
    navbarMenus: function() {
      return NavigationService.NavBarMenus;
    },
  },
  mounted() {
    this.$nextTick().then(NotificationService.init());
  },
};
</script>
