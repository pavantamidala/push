const webpush = require('web-push');

// let keys = webpush.generateVAPIDKeys()
// console.log(keys)

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
  'BIgoIyftdWAbMHk5n3hRkeMWG4F-BkmLAuDmicUctSAbe1Yu3C37y3di_WZV7XiM-ZkIgIEV6BXyjUrFpmnvrls',
  privateKey: 'EmvdHyhG8d6OHv7uYynI3020HZWWZW0irA9X2ROic2M'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
