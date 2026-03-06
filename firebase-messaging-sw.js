importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyBCTfaDf4Am2OOrwOMVczPSj2Y",
authDomain: "maths-e8a8f.firebaseapp.com",
projectId: "maths-e8a8f",
storageBucket: "maths-e8a8f.appspot.com",
messagingSenderId: "989519808044",
appId: "1:989519808044:web:8a6179e829773ef858b389"
});

const messaging = firebase.messaging();
