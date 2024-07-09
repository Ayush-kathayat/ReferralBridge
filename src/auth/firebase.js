// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqaWZWwgl8gVIeNN3vCt049_3ojRCUFMk",
  authDomain: "referralbridge-20f25.firebaseapp.com",
  projectId: "referralbridge-20f25",
  storageBucket: "referralbridge-20f25.appspot.com",
  messagingSenderId: "625210648271",
  appId: "1:625210648271:web:c302b354140a567d7a39ba",
  measurementId: "G-K313BZXMEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app; 