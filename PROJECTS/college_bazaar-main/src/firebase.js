// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtw1zFzwomgHtj3aojypzbAFDvF335RW0",
  authDomain: "collegebazaar-2e649.firebaseapp.com",
  projectId: "collegebazaar-2e649",
  storageBucket: "collegebazaar-2e649.appspot.com",
  messagingSenderId: "754494786441",
  appId: "1:754494786441:web:c68c2aec744398df472f58",
  measurementId: "G-GEDKMENQYZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
