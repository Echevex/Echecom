// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEuupCnogh_MKwfXWGnxswUcO6O7hQTPY",
  authDomain: "echecom-297b8.firebaseapp.com",
  projectId: "echecom-297b8",
  storageBucket: "echecom-297b8.firebasestorage.app",
  messagingSenderId: "847792561302",
  appId: "1:847792561302:web:6eb171de69fabade8d76b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);