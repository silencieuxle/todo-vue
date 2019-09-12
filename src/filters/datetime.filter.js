import Vue from 'vue';
import moment from 'moment';

Vue.filter('datetime', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY HH:mm');
  }
});
