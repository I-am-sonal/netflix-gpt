// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK3Y0xcQ1OVi1r5PI2cvlr2D7CWbDV1UU",
  authDomain: "netflixgpt-f1d20.firebaseapp.com",
  projectId: "netflixgpt-f1d20",
  storageBucket: "netflixgpt-f1d20.appspot.com",
  messagingSenderId: "956139845539",
  appId: "1:956139845539:web:fa084a96d8bfa9c6a88c16",
  measurementId: "G-TB5D6L2MZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
