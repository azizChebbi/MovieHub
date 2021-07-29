import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "SECRET_KEY",
    authDomain: "netflix-54a41.firebaseapp.com",
    databaseURL: "https://netflix-54a41.firebaseio.com",
    projectId: "netflix-54a41",
    storageBucket: "netflix-54a41.appspot.com",
    messagingSenderId: "57842857983",
    appId: "1:57842857983:web:dd4ebd833a6eeee389d9ca",
    measurementId: "G-RC0FH1Z2H6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
