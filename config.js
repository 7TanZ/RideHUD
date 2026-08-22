// ============================================================
//  EDIT THIS FILE — paste your Firebase config below.
//  Firebase console → Project settings → Your apps → Web app
//  These keys are PUBLIC by design. They are identifiers, not
//  secrets. Security comes from your Realtime Database rules.
// ============================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEIHsUE2h2YmdE9jtzI4RFCvy8NQnTuZ0",
  authDomain: "ridehud-ba469.firebaseapp.com",
  databaseURL: "https://ridehud-ba469-default-rtdb.firebaseio.com",
  projectId: "ridehud-ba469",
  storageBucket: "ridehud-ba469.firebasestorage.app",
  messagingSenderId: "533339729177",
  appId: "1:533339729177:web:bedc44b8a0307d3a782988",
  measurementId: "G-8E6PW0T7MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Riders are considered STALE after this many ms without an update.
// Below this, we show a distance. Above it, we show NO SIGNAL.
export const STALE_MS = 20000;

// Drop riders entirely after this long (they left the ride).
export const DROP_MS = 300000;
