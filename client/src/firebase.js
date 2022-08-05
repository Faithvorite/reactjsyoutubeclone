
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVqpAg75g_3tDkVRtoYWF6mopxHj-NS0",
  authDomain: "clone-6a6c8.firebaseapp.com",
  projectId: "clone-6a6c8",
  storageBucket: "clone-6a6c8.appspot.com",
  messagingSenderId: "69137143172",
  appId: "1:69137143172:web:4afbab1c673725c7c5b9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;