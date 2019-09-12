import NavigationService from '../../services/navigation.service.js';

export default {
  name: 'Home',
  // components: { PageAvatar },
  data() {
    return {
      apps: [],
    };
  },
  mounted() {
    this.apps = NavigationService.Apps;
  },
};
