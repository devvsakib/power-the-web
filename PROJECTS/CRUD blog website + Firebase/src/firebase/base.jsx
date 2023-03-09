import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: VITE_APP_FIREBASE_KEY,
    authDomain: VITE_APP_FIREBASE_DOMAIN,
    projectId: VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_APP_FIREBASE_SENDER_ID,
    appId: VITE_APP_FIREBASE_APP_ID,
    measurementId: VITE_APP_FIREBASE_MEASURMENT_ID
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);