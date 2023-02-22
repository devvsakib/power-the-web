import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCk60eojzpfXnDN_TiqyJSIRZpKIAxw2c4",
  authDomain: "disney-app-a922b.firebaseapp.com",
  storageBucket: "disney-app-a922b.appspot.com",
  messagingSenderId: "1020571980045",
  appId: "1:1020571980045:web:b615881942d60346da2044",
  projectId: "disney-app-a922b",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
