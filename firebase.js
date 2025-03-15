// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth(); // For authentication
const db = firebase.firestore(); // For Firestore database
