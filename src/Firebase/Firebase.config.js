// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7nEtFnYJuxpV0EbgZFFOS2YMeclivS8g",
  authDomain: "gray-cloud-hotel-clint.firebaseapp.com",
  projectId: "gray-cloud-hotel-clint",
  storageBucket: "gray-cloud-hotel-clint.appspot.com",
  messagingSenderId: "456192037700",
  appId: "1:456192037700:web:a14e2629620787df14bd11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;