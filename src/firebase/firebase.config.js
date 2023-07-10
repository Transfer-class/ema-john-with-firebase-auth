// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPCZYHCrMPYnsXgEAJF2Dg_UwMta8KDck",
  authDomain: "ema-john-with-firebase-a-d6caa.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-d6caa",
  storageBucket: "ema-john-with-firebase-a-d6caa.appspot.com",
  messagingSenderId: "289074406749",
  appId: "1:289074406749:web:09594afcc1d7f4fcf8b4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;