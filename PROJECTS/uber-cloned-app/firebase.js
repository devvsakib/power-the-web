// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChIsEoEj2Gs20z0ZnnYxYnWjZAfSXLDmE",
  authDomain: "uber-next-clone-live-c78ce.firebaseapp.com",
  projectId: "uber-next-clone-live-c78ce",
  storageBucket: "uber-next-clone-live-c78ce.appspot.com",
  messagingSenderId: "126140502200",
  appId: "1:126140502200:web:1e67a017a92b0fc908e44d",
  measurementId: "G-9HV1XF3B9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}