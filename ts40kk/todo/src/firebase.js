// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBmzuPuxCHgFAq-2-UBDt2pD0pIBPR0pY",
  authDomain: "todo-3bab6.firebaseapp.com",
  projectId: "todo-3bab6",
  storageBucket: "todo-3bab6.appspot.com",
  messagingSenderId: "599746903061",
  appId: "1:599746903061:web:814738c2be2ced598f221c",
  measurementId: "G-9XSPD5NV75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}
