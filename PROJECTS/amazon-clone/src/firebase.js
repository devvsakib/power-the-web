import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnbg_HKO37ENClUBf3VIIh9CT8uZKdWHo",
  authDomain: "clone-4fdb0.firebaseapp.com",
  databaseURL: "https://clone-4fdb0.firebaseio.com",
  projectId: "clone-4fdb0",
  storageBucket: "clone-4fdb0.appspot.com",
  messagingSenderId: "446307697695",
  appId: "1:446307697695:web:eba0a1dfbaae4938c9012a",
  measurementId: "G-NQ3S6K7MRF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
