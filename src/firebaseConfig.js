// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBu6yzJDpqcijbpRi_mljlO5enNn2LW1I",
  authDomain: "chambaflex2.firebaseapp.com",
  projectId: "chambaflex2",
  storageBucket: "chambaflex2.firebasestorage.app",
  messagingSenderId: "216199784683",
  appId: "1:216199784683:web:a65df33dc0017ac35736ae",
  measurementId: "G-2WVMP98NC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
