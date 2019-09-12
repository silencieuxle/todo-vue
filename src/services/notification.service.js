const NotificationService = {
  permissionGranted: false,

  init: function() {
    var vm = this;
    console.log('Service is initiating ...');
    if (!('Notification' in window)) {
      console.log('Web browser does not support Notification API ...');
      return;
    }
    console.log('Requesting permission ...');
    Notification.requestPermission().then(function(result) {
      if (result === 'granted') {
        console.log('Notification permission granted ...');
        vm.permissionGranted = true;
      } else {
        console.log('Notification permission denied ...');
        vm.permissionGranted = false;
      }
    });
  },

  sendNotification: function(title, content) {
    var vm = this;
    if (vm.permissionGranted) {
      var notification = new Notification(title, {
        body: content,
        requireInteraction: true,
        vibrate: true,
      });
      setTimeout(notification.close.bind(notification), 10000);
    }

    // notification.addEventListener('click', function(event) {
    //   if (!event.action) {
    //     return;
    //   }
    //   switch (event.actions) {
    //     case actions[0].action:
    //       console.log('Completed');
    //       break;
    //     case actions[1].action:
    //       console.log('Cancelled');
    //       break;
    //     default:
    //       return;
    //   }
    // });
  },
};

export default NotificationService;
