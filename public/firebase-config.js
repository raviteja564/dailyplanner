/ public/scripts/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCVG1dE9X5b3YAX_tG_XKc01pKx-SlC-v0",
  authDomain: "dailyplanner-e9f7d.firebaseapp.com",
  projectId: "dailyplanner-e9f7d",
  storageBucket: "dailyplanner-e9f7d.firebasestorage.app",
  messagingSenderId: "1037126520",
  appId: "1:1037126520:web:ce7031339a68723991968d",
  measurementId: "G-CJ2T8M13Z7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
