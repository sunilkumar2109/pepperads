
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHfjDmu2jGwT54J2VypDE5TvA-unSLS6g",
  authDomain: "pepperads-bb785.firebaseapp.com",
  projectId: "pepperads-bb785",
  storageBucket: "pepperads-bb785.appspot.com",
  messagingSenderId: "664759779286",
  appId: "1:664759779286:web:ced7acdd710ff6597dae77"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
