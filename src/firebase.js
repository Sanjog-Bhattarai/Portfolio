import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWsImSbgTkvoH71nag8isaRmDSkNIxfEY",
  authDomain: "sanportfolio-85ed2.firebaseapp.com",
  projectId: "sanportfolio-85ed2",
  storageBucket: "sanportfolio-85ed2.appspot.com",
  messagingSenderId: "729779968974",
  appId: "1:729779968974:web:a3e7031fe70c2c13c1299f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
